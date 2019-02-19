import app from '../../client'
import { generateId } from '../../helpers/idGenerator'
import { reset } from 'redux-form'

const staffApi = 'api/staff'
const fileApi = 'api/file'

export function createStaff(staff) {
	return async dispatch => {
		const isEqualPass = staff.password === staff.rePassword
		if (isEqualPass) {
			delete staff.rePassword
			const data = await app.service(fileApi).create({
				data: staff.image
			})
			const id = generateId(staff)
			await app.service(staffApi).create({
				...staff,
				idNumber: id,
				image: data._id,
				status: 'out'
			})
		}
		dispatch(reset('createStaffForm'))
		dispatch({ type: 'STAFF_CREATED', payload: isEqualPass })
	}
}

export function clearProfile() {
	dispatch({ type: 'CLEAR_PROFILE' })
}

export function removeStaff(staff) {
	console.log(staff)
	return async dispatch => {
		try {
			await app.service(staffApi).remove(staff._id)
			await app.service(fileApi).remove(staff.imageId)
			dispatch({ type: 'REMOVE_STAFF_SUCCESS' })
			dispatch(fetchStaff())
		} catch (e) {
			dispatch({ type: 'REMOVE_STAFF_FAILED', payload: e.message })
		}
	}
}

export function saveImage(imageString) {
	// console.log('image saved', imageString)
	return dispatch => {
		dispatch({ type: 'SAVE_IMAGE', payload: imageString })
	}
}

export function clearImage() {
	return dispatch => {
		dispatch({ type: 'CLEAR_IMAGE' })
	}
}

export function fetchStaff() {
	return async dispatch => {
		dispatch({ type: 'FETCHING_STAFF' })

		try {
			const staffList = await app.service(staffApi).find()
			const images = await app.service(fileApi).find()
			staffList.map((staff, index) => {
				const image = images.find(image => image._id === staff.image)
				staff.image = image.data
				staff.imageId = image._id
			})
			dispatch({ type: 'FETCHING_STAFF_SUCCESS', payload: staffList })
		} catch (e) {
			dispatch({ type: 'FETCHING_STAFF_FAILED', payload: e.message })
		}
	}
}

export function toggleFormVisibility(isVisible) {
	return dispatch => {
		dispatch({ type: 'STAFF_FORM_VISIBILITY', payload: isVisible })
	}
}

export function toggleProfileVisibility(isVisible) {
	return dispatch => {
		dispatch({ type: 'STAFF_PROFILE_VISIBILITY', payload: isVisible })
	}
}

export function setClickedStaffId(id) {
	return dispatch => {
		dispatch({ type: 'SET_CLICKED_STAFF_ID', payload: id })
	}
}

export function getStaffProfile(id) {
	return async dispatch => {
		const staff = await app.service(staffApi).find()
		const images = await app.service(fileApi).find()
		const result = staff.find(x => {
			return x._id === id
		})
		const img = images.find(img => {
			return img._id === result.image
		})
		delete result.image
		const payload = { ...result, image: img.data }
		dispatch({ type: 'GET_STAFF_PROFILE', payload: payload })
	}
}

export function setStaffFilter(payload) {
	return dispatch => {
		dispatch({ type: 'STAFF_FILTER', payload: payload })
	}
}
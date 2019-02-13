import app from '../../client'
import randomstring from 'randomstring'
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
			const id = randomstring.generate({
				charset: 'alphanumeric',
				length: 8,
				capitalization: 'uppercase'
			})
			await app.service(staffApi).create({
				...staff,
				idNumber: id,
				image: data._id
			})
		}
		dispatch(reset('createStaffForm'))
		dispatch({ type: 'STAFF_CREATED', payload: isEqualPass })
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

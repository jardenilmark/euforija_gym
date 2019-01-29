import app from '../../client'
import { converter } from '../../helpers/converter'
import randomstring from 'randomstring'

const staffApi = 'api/staff'
const fileApi = 'api/file'

export function createStaff(obj) {
	return async dispatch => {
		const isEqualPass = obj.password === obj.rePassword
		if (isEqualPass) {
			const staff = { ...obj }
			const id = randomstring.generate({
				length: 8,
				charset: 'alphanumeric',
				capitalization: 'uppercase'
			})
			delete staff.image
			delete staff.rePassword
			const base64 = await converter(obj.image)
			const data = await app.service(fileApi).create({
				data: base64
			})
			await app.service(staffApi).create({
				...staff,
				generatedId: id,
				image: data._id,
				time: [] // insert time in and time out object
			})
		}
		dispatch({ type: 'STAFF_CREATED', payload: isEqualPass })
	}
}

export function fetchStaff() {
	return async dispatch => {
		const staff = await app.service(staffApi).find()
		const images = await app.service(fileApi).find()
		staff.map((staff, index) => {
			const image = images.find(image => image._id === staff.image)
			staff.image = image.data
		})
		dispatch({ type: 'GET_STAFF', payload: staff })
	}
}

export function toggleFormVisibility(isVisible) {
	return async dispatch => {
		dispatch({ type: 'STAFF_FORM_VISIBILITY', payload: isVisible })
	}
}

export function toggleProfileVisibility(isVisible) {
	return async dispatch => {
		dispatch({ type: 'STAFF_PROFILE_VISIBILITY', payload: isVisible })
	}
}

export function setClickedStaffId(id) {
	return async dispatch => {
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

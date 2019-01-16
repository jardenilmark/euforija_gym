import app from '../../client'
import { converter } from '../../helpers/converter'
import randomstring from 'randomstring'

const staffApi = 'api/staff'
const fileApi = 'api/file'

export function createStaff(obj) {
	console.log(obj)
	return async dispatch => {
		const isEqualPass = obj.password === obj.rePassword
		if (isEqualPass) {
			const staff = { ...obj }
			const id = randomstring.generate({
				length: 8,
				charset: 'alphanumeric',
				capitalization: 'uppercase'
			})
			alert(id)
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

export function addStaff() {
	return async dispatch => {
		dispatch({ type: 'STAFF_FORM_VISIBILITY', payload: true })
	}
}

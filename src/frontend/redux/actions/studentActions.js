import app from '../../client'
import { converter } from '../../helpers/converter'

const studentApi = 'api/student'
const fileApi = 'api/file'

export function setActiveForm(payload) {
	return dispatch => {
		dispatch({ type: 'ACTIVE_STUDENT_FORM', payload: payload })
	}
}

export function setStepData(type, payload) {
	return dispatch => {
		dispatch({ type: `STEP_${type}`, payload: payload })
	}
}

export function setPaymentMethod(payload) {
	return dispatch => {
		dispatch({ type: 'PAYMENT_METHOD', payload: payload })
	}
}

export function createStudent(obj) {
	return async dispatch => {
		const base64 = await converter(obj.image)
		const data = await app.service(fileApi).create({
			data: base64
		})
		const student = { ...obj }
		student.image = data._id
		await app.service(studentApi).create({
			student
		})
		dispatch({ type: 'STUDENT_CREATED', payload: true })
	}
}

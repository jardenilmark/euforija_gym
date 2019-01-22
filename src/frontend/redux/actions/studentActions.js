import app from '../../client'
const studentApi = 'api/student'

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
		await app.service(studentApi).create({
			obj
		})
		dispatch({ type: 'STUDENT_CREATED', payload: true })
	}
}

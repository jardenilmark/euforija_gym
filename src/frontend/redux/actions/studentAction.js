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

const initialState = {
	activeForm: 'personal',
	personal: {},
	health: {},
	trainer: {},
	payment: {}
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'ACTIVE_STUDENT_FORM':
			return {
				...state,
				activeForm: action.payload
			}
		case 'STEP_PERSONAL':
			return {
				...state,
				personal: action.payload
			}
		case 'STEP_HEALTH':
			return {
				...state,
				health: action.payload
			}
		case 'STEP_TRAINER':
			return {
				...state,
				trainer: action.payload
			}
		case 'STEP_PAYMENT':
			return {
				...state,
				payment: action.payload
			}
		default:
			return state
	}
}

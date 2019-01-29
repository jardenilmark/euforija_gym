const initialState = {
	activeForm: 'personal',
	personal: {},
	health: {},
	trainer: {},
	payment: {},
	paymentMethod: 'full'
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
		case 'PAYMENT_METHOD':
			return {
				...state,
				paymentMethod: action.payload
			}
		default:
			return state
	}
}

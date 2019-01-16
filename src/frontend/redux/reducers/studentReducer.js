const initialState = { activeForm: 'personal' }

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'ACTIVE_STUDENT_FORM':
			return {
				...state,
				activeForm: action.payload
			}
		default:
			return state
	}
}

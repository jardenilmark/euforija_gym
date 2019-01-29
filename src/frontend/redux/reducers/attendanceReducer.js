const initialState = {
	time: ''
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'START_CLOCK_TICK':
			return {
				...state,
				time: action.payload
			}
		default:
			return state
	}
}

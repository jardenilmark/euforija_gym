const initialState = {
	staffs: [],
	selectedStaff: null
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'FETCHING_ALL_STAFF_SUCCESS':
			return {
				...state,
				staffs: action.payload,
				selectedStaff: action.payload[0]
			}
		case 'SELECTING_STAFF_SUCCESS':
			return {
				...state,
				selectedStaff: action.payload
			}
		default:
			return state
	}
}

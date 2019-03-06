const initialState = {
	staffs: [],
	selectedStaff: null,
	salary: 0,
	from: new Date(),
	to: new Date(),
	rate: 0,
	hours: 0
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
		case 'PASS_DATES_PROPS':
			return {
				...state,
				from: new Date(action.payload.from.toDateString()),
				to: action.payload.to
			}
		case 'COMPUTE_SALARY':
			return {
				...state,
				salary: action.payload.salary,
				hours: action.payload.hours.toFixed(2),
				rate: action.payload.rate
			}
		default:
			return state
	}
}

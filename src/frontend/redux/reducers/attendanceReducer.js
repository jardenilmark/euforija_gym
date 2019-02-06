const initialState = {
	time: '',
	loggedIn: [],
	loggedOut: [],
	visitors: [],
	loggedUser: null,
	coachesIsLoading: false,
	visitorIsLoading: false
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'START_CLOCK_TICK':
			return {
				...state,
				time: action.payload
			}
		case 'FETCHING_ATTENDANCE':
			return {
				...state,
				coachesIsLoading: true
			}
		case 'FETCHING_ATTENDANCE_SUCCESS':
			return {
				...state,
				loggedIn: action.payload.filter(coach => coach.status === 'in'),
				loggedOut: action.payload.filter(coach => coach.status === 'out'),
				coachesIsLoading: false
			}
		case 'FETCHING_VISITORS':
			return {
				...state,
				visitorIsLoading: true
			}
		case 'FETCHING_VISITORS_SUCCESS':
			return {
				...state,
				visitors: action.payload,
				visitorIsLoading: false
			}
		case 'UPDATING_ATTENDANCE_SUCCESS':
			return {
				...state,
				loggedUser: action.payload[0]
			}
		case 'DISPLAY_PROFILE_TIMEOUT':
			return {
				...state,
				loggedUser: null
			}
		default:
			return state
	}
}

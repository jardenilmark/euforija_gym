import swal from 'sweetalert'
const initialState = {
	staffFormVisibility: false,
	staffProfileVisibility: false
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'STAFF_CREATED':
			swal(`${action.payload}`)
			return {
				...state
			}
		case 'GET_STAFF':
			return {
				...state,
				staff: action.payload
			}
		case 'STAFF_FORM_VISIBILITY':
			return {
				...state,
				staffFormVisibility: action.payload
			}
		case 'STAFF_PROFILE_VISIBILITY':
			return {
				...state,
				staffProfileVisibility: action.payload
			}
		case 'GET_STAFF_PROFILE':
			return {
				...state,
				staffProfile: action.payload
			}
		case 'SET_CLICKED_STAFF_ID':
			return {
				...state,
				clickedStaff: action.payload
			}
		default:
			return state
	}
}

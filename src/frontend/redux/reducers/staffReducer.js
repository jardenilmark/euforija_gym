import swal from 'sweetalert'

const initialState = {
	staffFormVisibility: false,
	staffProfileVisibility: false,
	isFetching: false,
	staffList: [],
	image: '',
	type: 'all'
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'STAFF_CREATED':
			return {
				...state
			}
		case 'STAFF_FILTER':
			return {
				...state,
				type: action.payload
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
		case 'FETCHING_STAFF':
			return {
				...state,
				isFetching: true
			}
		case 'FETCHING_STAFF_SUCCESS':
			return {
				...state,
				isFetching: false,
				staffList: action.payload
			}
		case 'FETCHING_STAFF_FAILED':
			swal(action.payload)
			return {
				...state
			}
		case 'SAVE_IMAGE':
			return {
				...state,
				image: action.payload
			}
		case 'CLEAR_IMAGE':
			return {
				...state,
				image: ''
			}
		default:
			return state
	}
}

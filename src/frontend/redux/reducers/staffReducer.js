import swal from 'sweetalert'
const initialState = {
	staffFormVisibility: false
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
		default:
			return state
	}
}

import swal from 'sweetalert'
const initialState = { staffList: [], type: 'All' }

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'STAFF_CREATED':
			swal(`${action.payload}`)
			return {
				...state
			}
		case 'STAFF_FILTER':
			return {
				...state,
				type: action.payload
			}
		case 'GET_STAFF':
			return {
				...state,
				staffList: action.payload
			}
		default:
			return state
	}
}

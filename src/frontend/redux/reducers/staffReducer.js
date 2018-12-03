import swal from 'sweetalert'
const initialState = {}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'STAFF_CREATED':
			swal(`${action.payload}`)
			return {
				...state
			}
		default:
			return state
	}
}

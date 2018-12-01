import app from '../../client'
const staffApi = 'api/staff'

export function createItem(obj) {
	return async dispatch => {
		await app.service(staffApi).create(obj)
		dispatch({ type: 'STAFF_ADDED', payload: true })
	}
}

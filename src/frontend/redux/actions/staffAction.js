import app from '../../client'
import { converter } from '../../converter'

const staffApi = 'api/staff'
const fileApi = 'api/file'

export function createStaff(obj) {
	return async dispatch => {
		const isEqualPass = obj.password === obj.rePassword
		if (isEqualPass) {
			const staff = { ...obj }
			delete staff.image
			delete staff.rePassword
			const base64 = await converter(obj.image)
			const data = await app.service(fileApi).create({
				data: base64
			})
			await app.service(staffApi).create({
				...staff,
				image: data._id,
				time: [] // insert time in and time out object
			})
		}
		dispatch({ type: 'STAFF_CREATED', payload: isEqualPass })
	}
}
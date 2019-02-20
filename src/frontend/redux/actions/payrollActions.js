import app from '../../client'
import date from 'date-fns'
import Swal from 'sweetalert2'

import dateHelper from '../../helpers/dateHelper'

const attendanceApi = 'api/attendance'
const staffApi = 'api/staff'
const studentApi = 'api/student'
const imageApi = 'api/file'

export const fetchAllStaff = () => async dispatch => {
	try {
		dispatch({ type: 'FETCHING_ALL_STAFF' })

		let staffs = await app.service(staffApi).find()
		const images = await app.service(imageApi).find()

		staffs = staffs.map(staff => {
			const imageIndex = images.findIndex(image => image._id === staff.image)
			const base64 = images[imageIndex].data
			return {
				...staff,
				image: base64
			}
		})

		dispatch({
			type: 'FETCHING_ALL_STAFF_SUCCESS',
			payload: staffs
		})
	} catch (e) {
		dispatch({
			type: 'FETCHING_ALL_STAFF_FAILURE',
			payload: e
		})
	}
}

export const selectStaff = staff => async dispatch => {
	try {
		dispatch({
			type: 'SELECTING_STAFF_SUCCESS',
			payload: staff
		})
	} catch (e) {
		dispatch({
			type: 'SELECTING_STAFF_FAILURE',
			payload: e
		})
	}
}

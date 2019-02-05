import app from '../../client'
import moment from 'moment'

const attendanceApi = 'api/attendance'
const staffApi = 'api/staff'

export function tick() {
	return dispatch => {
		dispatch({
			type: 'START_CLOCK_TICK',
			payload: moment().format('dddd, MMM DD, h:mm:ss a')
		})
	}
}

export const updateAttendance = loggedUser => async dispatch => {
	try {
		dispatch({ type: 'UPDATING_ATTENDANCE' })

		const user = await app.service(staffApi).find({ query: { idNumber: loggedUser.logId } })

		console.log(user)

		dispatch({ type: 'UPDATING_ATTENDANCE_SUCCESS', payload: user })

		setTimeout(() => {
			dispatch({ type: 'DISPLAY_PROFILE_TIMEOUT' })
		}, 5000)

		return user
	} catch (e) {
		dispatch({ type: 'UPDATING_ATTENDANCE_FAILURE', payload: e })
		return e
	}
}

export const getAttendance = () => async dispatch => {
	try {
		dispatch({ type: 'FETCHING_ATTENDANCE' })

		const coaches = await app.service(staffApi).find({ query: { role: 'Coach' } })

		dispatch({
			type: 'FETCHING_ATTENDANCE_SUCCESS',
			payload: coaches
		})

		return coaches
	} catch (e) {
		dispatch({ type: 'FETCHING_ATTENDANCE_FAILURE', payload: e })
		return e
	}
}

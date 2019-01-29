import app from '../../client'
import moment from 'moment'

const attendanceApi = 'api/attendance'

export function tick() {
	return dispatch => {
		dispatch({
			type: 'START_CLOCK_TICK',
			payload: moment().format('dddd, MMM DD, h:mm:ss a')
		})
	}
}

export function updateAttendance() {
	return async dispatch => {
		dispatch({ type: 'UPDATING_ATTENDANCE' })

		dispatch({ type: 'UPDATING_ATTENDANCE_SUCCESS' })
	}
}

export function getAttendance() {
	return async dispatch => {
		dispatch({
			type: 'FETCHING_ATTENDANCE',
			payload: {
				loggedIn,
				loggedIn,
				visitors
			}
		})
	}
}

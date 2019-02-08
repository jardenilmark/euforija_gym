import app from '../../client'
import date from 'date-and-time'
import Swal from 'sweetalert2'

const attendanceApi = 'api/attendance'
const staffApi = 'api/staff'
const studentApi = 'api/student'

export const tick = () => async dispatch => {
	try {
		const now = new Date()
		dispatch({
			type: 'START_CLOCK_TICK',
			payload: date.format(now, 'dddd, MMM D, h:mm:ss A')
		})
		if (date.format(now, 'HH:mm:ss') === '00:00:00') {
			dispatch(checkIfDayPassed())
		}
	} catch (e) {
		return e
	}
}

export const updateAttendance = loggedUser => async dispatch => {
	try {
		dispatch({ type: 'UPDATING_ATTENDANCE' })

		let user = await app.service(staffApi).find({ query: { idNumber: loggedUser.logId } })

		if (user[0]) {
			await updateAttendanceStatus(user[0])
			if (user[0].role === 'Coach') {
				dispatch(getAttendance())
			}
		} else {
			user = await app.service(studentApi).find({ query: { idNumber: loggedUser.logId } })
			if (user[0]) {
				await updateVisitorTimeIn(user[0])
				dispatch(getVisitors())
			}
		}

		if (!user[0]) {
			Swal.fire({
				position: 'top-start',
				type: 'error',
				title: 'ID Number Invalid',
				showConfirmButton: false,
				timer: 1500
			})
		}
		setTimeout(() => {
			dispatch({ type: 'UPDATING_ATTENDANCE_SUCCESS', payload: user })
		}, 1500)

		setTimeout(() => {
			dispatch({ type: 'DISPLAY_PROFILE_TIMEOUT' })
		}, 5000)

		return user
	} catch (e) {
		dispatch({ type: 'UPDATING_ATTENDANCE_FAILURE', payload: e })
		return e
	}
}

const getAttendance = () => async dispatch => {
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

const getVisitors = () => async dispatch => {
	try {
		dispatch({ type: 'FETCHING_VISITORS' })

		const visitors = await app.service(studentApi).find({
			query: {
				timeIn: { $gte: new Date(new Date().toDateString()) },
				$sort: {
					timeIn: -1
				}
			}
		})

		dispatch({
			type: 'FETCHING_VISITORS_SUCCESS',
			payload: visitors
		})

		return visitors
	} catch (e) {
		dispatch({ type: 'FETCHING_VISITORS_FAILURE', payload: e })
		return e
	}
}

export const checkIfDayPassed = () => async dispatch => {
	try {
		const now = new Date()
		let currentDate = []
		currentDate = await app.service(attendanceApi).find({
			query: {
				name: 'current date'
			}
		})

		if (!currentDate[0]) {
			currentDate = await app.service(attendanceApi).create({
				name: 'current date',
				today: new Date()
			})
		} else if (new Date(currentDate[0].today).toDateString() !== now.toDateString()) {
			await timeoutAll()
			console.log(new Date(currentDate[0].today))
			currentDate = await app.service(attendanceApi).patch(
				null,
				{
					today: new Date()
				},
				{
					query: {
						name: 'current date'
					}
				}
			)
		}

		dispatch(getAttendance())
		dispatch(getVisitors())
		dispatch({
			type: 'FETCHING_CURRENT_DATE',
			payload: currentDate[0].today
		})

		return currentDate
	} catch (e) {
		console.log('errrrroooor', e)
		return e
	}
}

const updateAttendanceStatus = async user => {
	try {
		if (user.status === 'in') {
			await app.service(staffApi).patch(user._id, {
				status: 'out'
			})
			Swal.fire({
				type: 'success',
				title: 'Time out success',
				showConfirmButton: false,
				timer: 1500
			})
		} else {
			await app.service(staffApi).patch(user._id, {
				status: 'in'
			})
			Swal.fire({
				type: 'success',
				title: 'Time in success',
				showConfirmButton: false,
				timer: 1500
			})
		}
	} catch (e) {
		return e
	}
}

const updateVisitorTimeIn = async user => {
	try {
		await app.service(studentApi).patch(user._id, {
			timeIn: new Date()
		})
		Swal.fire({
			type: 'success',
			title: 'Time in success',
			showConfirmButton: false,
			timer: 1500
		})
	} catch (e) {
		return e
	}
}

const timeoutAll = async user => {
	try {
		await app.service(staffApi).patch(null, {
			status: 'out'
		})
	} catch (e) {
		return e
	}
}

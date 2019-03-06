import app from '../../client'
import date from 'date-fns'
import Swal from 'sweetalert2'

import * as dateHelper from '../../helpers/dateHelper'

const attendanceApi = 'api/attendance'
const staffApi = 'api/staff'
const studentApi = 'api/student'
const imageApi = 'api/file'

export const fetchAllStaff = () => async dispatch => {
	try {
		dispatch({ type: 'FETCHING_ALL_STAFF' })

		let query = {
			firstName: {
				$search: 'len',
				$caseSensitive: false
			}
		}
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

export const computeSalary = (from, to, rate, staff) => async dispatch => {
	try {
		dispatch({ type: 'FETCHING_DATES' })
		const dates = await app.service(attendanceApi).find({
			query: {
				user: staff._id,
				date: {
					$gte: new Date(from),
					$lte: new Date(to)
				}
			}
		})
		rate = rate > 0 ? rate : 0
		const hours = dateHelper.solveHours(dates)
		const salary = dateHelper.solveGrossSalary(hours, rate)
		dispatch({
			type: 'COMPUTE_SALARY',
			payload: {
				salary,
				hours,
				rate
			}
		})
	} catch (e) {
		dispatch({
			type: 'FETCHING_DATES_FAILURE',
			payload: e
		})
	}
}

export const selectDates = range => async dispatch => {
	dispatch({
		type: 'PASS_DATES_PROPS',
		payload: {
			from: new Date(range.startDate._d),
			to: new Date(range.endDate._d)
		}
	})
}

import app from '../../client'
import { isValidAuthority } from './loginActions'
import date from 'date-fns'
import Swal from 'sweetalert2'

import * as dateHelper from '../../helpers/dateHelper'

const attendanceApi = 'api/attendance'
const staffApi = 'api/staff'
const studentApi = 'api/student'
const imageApi = 'api/file'

export const fetchAllStaff = () => async dispatch => {
	try {
		const check = await isValidAuthority('/payroll')
		if (check) {
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
		} else {
			dispatch({
				type: 'FETCHING_ALL_STAFF_FAILURE',
				payload: e
			})
		}
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
		const dates = await dispatch(fetchRange(from, to, staff))
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
			type: 'COMPUTE_SALARY_FAILURE',
			payload: e
		})
	}
}

export const fetchRange = (from, to, staff) => async dispatch => {
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
		dispatch({
			type: 'FETCHING_DATES_SUCCESS',
			payload: dates
		})
		return dates
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

export const findStaff = name => async dispatch => {
	try {
		dispatch({ type: 'FINDING_STAFF' })
		let staffs = await app.service(staffApi).find({
			query: {
				$or: [
					{ firstName: { $regex: name, $options: 'igm' } },
					{ lastName: { $regex: name, $options: 'igm' } },
					{ idNumber: { $regex: name, $options: 'igm' } }
				]
			}
		})
		console.log(staffs)
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
			type: 'FINDING_STAFF_SUCCESS',
			payload: staffs
		})
	} catch (e) {
		dispatch({
			type: 'FINDING_STAFF_FAILURE',
			payload: e
		})
	}
}

import app from '../../client'
import { generateId } from '../../helpers/idGenerator'
import { reset } from 'redux-form'
import { getHash } from '../../helpers/bcrypt'
import { isValidAuthority } from './loginActions'
import iziToast from 'izitoast'

const staffApi = 'api/staff'
const fileApi = 'api/file'
const studentApi = 'api/student'

export function createStaff(staff) {
	return async dispatch => {
		const check = await isValidAuthority('/staff')
		if (check) {
			const isEqualPass = staff.password === staff.rePassword
			if (isEqualPass) {
				delete staff.rePassword
				staff.password = await getHash(staff.password)
				const data = await app.service(fileApi).create({
					data: staff.image
				})
				const id = generateId(staff)
				await app.service(staffApi).create({
					...staff,
					idNumber: id,
					image: data._id,
					status: 'out'
				})
			}
			dispatch(reset('createStaffForm'))
			dispatch({ type: 'STAFF_CREATED', payload: isEqualPass })
			iziToast.success({
				title: 'SUCCESS',
				message: 'Staff added successfully!',
				position: 'topRight'
			})
			dispatch(fetchStaff())
		}
	}
}

export function updateStaff(staff) {
	return async dispatch => {
		const check = await isValidAuthority('/staff')
		console.log(staff)
		// if (check) {
		// 	const isEqualPass = staff.password === staff.rePassword
		// 	if (isEqualPass) {
		// 		delete staff.rePassword
		// 		staff.password = await getHash(staff.password)
		// 		const data = await app.service(fileApi).update({
		// 			data: staff.image
		// 		})
		// 		const id = generateId(staff)
		// 		await app.service(staffApi).create({
		// 			...staff,
		// 			idNumber: id,
		// 			image: data._id,
		// 			status: 'out'
		// 		})
		// 	}
		// 	dispatch(reset('createStaffForm'))
		// 	dispatch({ type: 'STAFF_CREATED', payload: isEqualPass })
		// 	iziToast.success({
		// 		title: 'SUCCESS',
		// 		message: 'Staff added successfully!',
		// 		position: 'topRight'
		// 	})
		// 	dispatch(fetchStaff())
		// }
	}
}

export function removeStaff(staff) {
	return async dispatch => {
		try {
			await app.service(staffApi).remove(staff._id)
			await app.service(fileApi).remove(staff.imageId)
			dispatch({ type: 'REMOVE_STAFF_SUCCESS' })
			dispatch(fetchStaff())
		} catch (e) {
			dispatch({ type: 'REMOVE_STAFF_FAILED', payload: e.message })
		}
	}
}

export function fetchStaff() {
	return async dispatch => {
		const check = isValidAuthority('/staff')
		if (check) {
			dispatch({ type: 'FETCHING_STAFF' })

			try {
				const staffList = await app.service(staffApi).find({
					query: {
						role: {
							$ne: 'Owner'
						}
					}
				})
				const images = await app.service(fileApi).find()
				staffList.map(async (staff, index) => {
					const image = images.find(image => image._id === staff.image)
					staff.image = image.data
					staff.imageId = image._id
					const students = await app.service(studentApi).find({
						query: {
							trainerId: staff._id
						}
					})
					staff.students = students
				})
				dispatch({ type: 'FETCHING_STAFF_SUCCESS', payload: staffList })
			} catch (e) {
				dispatch({ type: 'FETCHING_STAFF_FAILED', payload: e.message })
			}
		}
	}
}

export function editStaffProfile(staff) {
	return dispatch => {
		dispatch({ type: 'EDIT_STAFF_PROFILE', payload: staff })
	}
}

export function toggleFormVisibility(isVisible) {
	return dispatch => {
		dispatch({ type: 'STAFF_FORM_VISIBILITY', payload: isVisible })
	}
}

export function toggleProfileVisibility(isVisible) {
	return dispatch => {
		dispatch({ type: 'STAFF_PROFILE_VISIBILITY', payload: isVisible })
	}
}

export function setClickedStaff(staff) {
	console.log(staff)
	return dispatch => {
		dispatch({ type: 'SET_CLICKED_STAFF', payload: staff })
	}
}

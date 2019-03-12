import app from '../../client'
import { isValidAuthority } from './loginActions'
import { generateId } from '../../helpers/idGenerator'
import { reset } from 'redux-form'
import Swal from 'sweetalert2'
import iziToast from 'izitoast'

const studentApi = 'api/student'
const fileApi = 'api/file'
const staffApi = 'api/staff'

export function setActiveForm(payload) {
	return dispatch => {
		dispatch({ type: 'ACTIVE_STUDENT_FORM', payload: payload })
	}
}

export function setStepData(type, payload) {
	if (type == 'PERSONAL') {
		if (payload.image) {
			return dispatch => {
				dispatch({ type: `STEP_${type}`, payload: payload })
			}
		} else {
			Swal.fire({
				type: 'error',
				title: 'Capture Image First!',
				showConfirmButton: false,
				timer: 1500
			})
		}
	} else {
		return dispatch => {
			dispatch({ type: `STEP_${type}`, payload: payload })
		}
	}
}

export function setPaymentMethod(payload) {
	return dispatch => {
		dispatch({ type: 'PAYMENT_METHOD', payload: payload })
	}
}

export function createStudent(student) {
	return async dispatch => {
		const data = await app.service(fileApi).create({
			data: student.image
		})
		student.image = data._id
		student.id = generateId(student)
		await app.service(studentApi).create({
			...student
		})
		dispatch({ type: 'STUDENT_CREATED', payload: true })
		dispatch(reset('studentHealthForm'))
		dispatch(reset('studentPaymentForm'))
		dispatch(reset('studentPersonalForm'))
		iziToast.success({
			title: 'SUCCESS',
			message: 'Student added successfully!',
			position: 'topRight'
		})
		dispatch(fetchStudents())
	}
}

export function fetchStudents() {
	return async dispatch => {
		const check = isValidAuthority('/student')
		if (check) {
			dispatch({ type: 'FETCHING_STUDENTS' })

			try {
				const studentsList = await app.service(studentApi).find()
				console.log('students', studentsList)
				const images = await app.service(fileApi).find()
				studentsList.map(async (student, index) => {
					const image = images.find(image => image._id === student.image)
					student.image = image.data
					student.imageId = image._id
					const trainer = await app.service(staffApi).find({ query: { _id: student.trainerId } })
					const trainerImage = images.find(image => image._id === trainer[0].image)
					trainer[0].image = trainerImage.data
					student.trainer = trainer[0]
				})
				dispatch({ type: 'FETCHING_STUDENTS_SUCCESS', payload: studentsList })
			} catch (e) {
				dispatch({ type: 'FETCHING_STUDENTS_FAILED', payload: e.message })
			}
		}
	}
}

export function toggleProfileVisibility(boolean) {
	return dispatch => {
		dispatch({ type: 'TOGGLE_PROFILE_VISIBILITY', payload: boolean })
	}
}

export function toggleFormVisibility(boolean) {
	console.log(boolean)
	return dispatch => {
		dispatch({ type: 'TOGGLE_FORM_VISIBILITY', payload: boolean })
	}
}

export function setClickedStudent(student) {
	return dispatch => {
		dispatch({ type: 'SET_CLICKED_STUDENT', payload: student })
	}
}

export function removeStudent(student) {
	return async dispatch => {
		try {
			await app.service(studentApi).remove(student._id)
			await app.service(fileApi).remove(student.imageId)
			dispatch({ type: 'REMOVE_STUDENT', payload: student })
			iziToast.success({
				title: 'SUCCESS',
				message: 'Staff removed successfully!',
				position: 'topRight'
			})
			dispatch(fetchStudents())
		} catch (error) {
			console.log(error)
		}
	}
}

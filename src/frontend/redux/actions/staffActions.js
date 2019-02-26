import app from '../../client'
import { generateId } from '../../helpers/idGenerator'
import { reset } from 'redux-form'
import { getHash } from '../../helpers/bcrypt'
import iziToast from 'izitoast'
import { isValidAuthority } from './loginActions'

const staffApi = 'api/staff'
const fileApi = 'api/file'

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
		}
	}
}

export function removeStaff(staff) {
	console.log(staff)
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
				const staffList = await app.service(staffApi).find()
				const images = await app.service(fileApi).find()
				staffList.map((staff, index) => {
					const image = images.find(image => image._id === staff.image)
					staff.image = image.data
					staff.imageId = image._id
				})
				dispatch({ type: 'FETCHING_STAFF_SUCCESS', payload: staffList })
			} catch (e) {
				dispatch({ type: 'FETCHING_STAFF_FAILED', payload: e.message })
			}
		}
	}
}

export function saveImage(imageString) {
	return dispatch => {
		if (imageString) {
			iziToast.success({
				title: 'SUCCESS',
				message: 'Image captured successfully!',
				position: 'topRight'
			})
			dispatch({ type: 'SAVE_IMAGE', payload: imageString })
			dispatch(toggleCropImageModal())
		} else {
			iziToast.error({
				title: 'ERROR',
				message: 'No image captured! Webcam might not have started yet',
				position: 'topRight'
			})
		}
	}
}

export function clearImage() {
	return dispatch => {
		dispatch({ type: 'CLEAR_IMAGE' })
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

export function setClickedStaffId(id) {
	return dispatch => {
		dispatch({ type: 'SET_CLICKED_STAFF_ID', payload: id })
	}
}

export function toggleCropImageModal() {
	return dispatch => {
		dispatch({ type: 'TOGGLE_CROP_IMAGE_MODAL' })
	}
}

export function onCropChange(cropCoordinates) {
	return dispatch => {
		dispatch({ type: 'CHANGE_CROP_VALUE', payload: cropCoordinates })
	}
}

export function onCropComplete(croppedAreaPixels) {
	return dispatch => {
		dispatch({ type: 'CROP_COMPLETED', payload: croppedAreaPixels })
	}
}

export function getCroppedImage(imgSrc, pixelCrop) {
	const image = new Image()
	image.src = imgSrc
	const canvas = document.createElement('canvas')
	canvas.width = pixelCrop.width
	canvas.height = pixelCrop.height
	const ctx = canvas.getContext('2d')

	ctx.drawImage(
		image,
		pixelCrop.x,
		pixelCrop.y,
		pixelCrop.width,
		pixelCrop.height,
		0,
		0,
		pixelCrop.width,
		pixelCrop.height
	)

	const base64Image = canvas.toDataURL('image/jpeg')

	return dispatch => {
		dispatch({ type: 'GET_CROPPED_IMAGE', payload: base64Image })
		dispatch(toggleCropImageModal())
	}
}

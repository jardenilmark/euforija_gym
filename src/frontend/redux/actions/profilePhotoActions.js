import iziToast from 'izitoast'

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

export function clearImage() {
	return dispatch => {
		dispatch({ type: 'CLEAR_IMAGE' })
	}
}

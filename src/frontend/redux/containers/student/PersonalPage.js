import { reduxForm } from 'redux-form'
import Personal from '../../../components/student/PersonalPage'
import { connect } from 'react-redux'
import {
	saveImage,
	toggleCropImageModal,
	onCropChange,
	onCropComplete,
	getCroppedImage,
	clearImage
} from '../../actions/profilePhotoActions'

function mapStateToProps(state) {
	return {
		image: state.student.image,
		crop: state.student.crop,
		croppedImage: state.student.croppedImage,
		croppedAreaPixels: state.student.croppedAreaPixels,
		modalVisibility: state.student.croppedImageModalVisibility
	}
}

function mapDispatchToProps(dispatch) {
	return {
		saveImage(img) {
			dispatch(saveImage(img))
		},
		toggleCropImageModal() {
			dispatch(toggleCropImageModal())
		},
		onCropChange(cropCoordinates) {
			dispatch(onCropChange(cropCoordinates))
		},
		onCropComplete(croppedArea) {
			dispatch(onCropComplete(croppedArea))
		},
		getCroppedImage(img, pixelCrop) {
			dispatch(getCroppedImage(img, pixelCrop))
		},
		clearImage() {
			dispatch(clearImage())
		}
	}
}

const Form = reduxForm({ form: 'studentPersonalForm' })(Personal)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form)

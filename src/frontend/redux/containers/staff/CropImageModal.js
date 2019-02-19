import { connect } from 'react-redux'
import {
	onCropChange,
	onCropComplete,
	toggleCropImageModal,
	getCroppedImage
} from '../../actions/staffActions'
import CropImageModal from '../../../components/staff/CropImageModal'

function mapStateToProps(state) {
	return {
		image: state.staff.image,
		crop: state.staff.crop,
		isVisible: state.staff.cropImageModalVisibility,
		croppedAreaPixels: state.staff.croppedAreaPixels
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onZoomChange(value) {
			dispatch(onZoomChange(value))
		},
		onCropChange(coordinates) {
			dispatch(onCropChange(coordinates))
		},
		async onCropComplete(croppedArea, croppedAreaPixels) {
			dispatch(onCropComplete(croppedAreaPixels))
		},
		toggleModal() {
			dispatch(toggleCropImageModal())
		},
		getCroppedImage(imgSrc, croppedAreaPixels) {
			dispatch(getCroppedImage(imgSrc, croppedAreaPixels))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CropImageModal)

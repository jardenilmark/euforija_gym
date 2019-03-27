import { connect } from 'react-redux'
import {
	onCropChange,
	onCropComplete,
	toggleCropImageModal,
	getCroppedImage
} from '../../actions/profilePhotoActions'
import CropImageModal from '../../../components/custom/CropImageModal'

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

import { connect } from 'react-redux'
import Staff from '../../../components/staff/StaffPage'
import {
	createStaff,
	toggleFormVisibility,
	toggleProfileVisibility,
	setClickedStaffId,
	saveImage,
	clearImage,
	fetchStaff,
	toggleCropImageModal
} from '../../actions/staffActions'
import Swal from 'sweetalert2'

function mapStateToProps(state) {
	return {
		formVisibility: state.staff.staffFormVisibility,
		profileVisibility: state.staff.staffProfileVisibility,
		clickedStaff: state.staff.clickedStaff,
		image: state.staff.image,
		croppedImage: state.staff.croppedImage
	}
}

function mapDispatchToProps(dispatch) {
	return {
		async createStaff(user) {
			if (user.image) {
				await dispatch(createStaff(user))
				await dispatch(fetchStaff())
				dispatch(clearImage())
			} else {
				Swal.fire({
					type: 'error',
					title: 'Capture Image First!',
					showConfirmButton: false,
					timer: 1500
				})
			}
		},
		toggleFormVisibility(isVisible) {
			dispatch(toggleFormVisibility(isVisible))
		},
		toggleProfileVisibility(isVisible) {
			dispatch(toggleProfileVisibility(isVisible))
		},
		setClickedStaffId(id) {
			dispatch(setClickedStaffId(id))
		},
		saveImage(imageString) {
			dispatch(saveImage(imageString))
		},
		clearImage() {
			dispatch(clearImage())
		},
		toggleCropImageModal() {
			dispatch(toggleCropImageModal())
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Staff)

import { connect } from 'react-redux'
import Staff from '../../../components/staff/StaffPage'
import {
	createStaff,
	toggleFormVisibility,
	getStaffProfile,
	toggleProfileVisibility,
	setClickedStaffId,
	saveImage,
	clearImage,
	fetchStaff
} from '../../actions/staffActions'
import Swal from 'sweetalert2'

function mapStateToProps(state) {
	return {
		formVisibility: state.staff.staffFormVisibility,
		profileVisibility: state.staff.staffProfileVisibility,
		staffProfile: state.staff.staffProfile,
		clickedStaff: state.staff.clickedStaff,
		image: state.staff.image
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
		async getStaffProfile(id) {
			await dispatch(getStaffProfile(id))
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
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Staff)

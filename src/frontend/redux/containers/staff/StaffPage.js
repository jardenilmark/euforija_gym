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
			await dispatch(createStaff(user))
			await dispatch(fetchStaff())
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

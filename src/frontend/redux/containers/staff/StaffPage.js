import { connect } from 'react-redux'
import Staff from '../../../components/staff/StaffPage'
import {
	createStaff,
	toggleFormVisibility,
	getStaffProfile,
	toggleProfileVisibility,
	setClickedStaffId
} from '../../actions/staffActions'

function mapStateToProps(state) {
	return {
		formVisibility: state.staff.staffFormVisibility,
		profileVisibility: state.staff.staffProfileVisibility,
		staffProfile: state.staff.staffProfile,
		clickedStaff: state.staff.clickedStaff
	}
}

function mapDispatchToProps(dispatch) {
	return {
		async createStaff(user) {
			await dispatch(createStaff(user))
		},
		async toggleFormVisibility(isVisible) {
			await dispatch(toggleFormVisibility(isVisible))
		},
		async getStaffProfile(id) {
			await dispatch(getStaffProfile(id))
		},
		async toggleProfileVisibility(isVisible) {
			await dispatch(toggleProfileVisibility(isVisible))
		},
		async setClickedStaffId(id) {
			await dispatch(setClickedStaffId(id))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Staff)

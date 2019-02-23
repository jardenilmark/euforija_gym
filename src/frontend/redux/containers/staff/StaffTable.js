import { connect } from 'react-redux'
import StaffTable from '../../../components/staff/StaffTable'
import { fetchStaff, removeStaff, clearProfile } from '../../actions/staffActions'

function mapStateToProps(state) {
	return {
		staff: state.staff.staffList,
		isFetching: state.staff.isFetching,
		userLogin: state.staff.userLogin
	}
}

function mapDispatchToProps(dispatch) {
	return {
		async fetchStaff(user) {
			await dispatch(fetchStaff(user))
		},
		async removeStaff(staff) {
			await dispatch(removeStaff(staff))
		},
		clearStaffProfile() {
			dispatch(clearProfile())
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StaffTable)

import { connect } from 'react-redux'
import StaffTable from '../../../components/staff/StaffTable'
import { fetchStaff, removeStaff } from '../../actions/staffActions'

function mapStateToProps(state) {
	return {
		staff: state.staff.staffList,
		isFetching: state.staff.isFetching
	}
}

function mapDispatchToProps(dispatch) {
	return {
		async fetchStaff() {
			await dispatch(fetchStaff())
		},
		async removeStaff(staff) {
			await dispatch(removeStaff(staff))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StaffTable)

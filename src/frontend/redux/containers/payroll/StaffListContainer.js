import { connect } from 'react-redux'
import { fetchAllStaff, selectStaff } from '../../actions/payrollActions'
import StaffList from '../../../components/payroll/StaffList'

function mapStateToProps(state) {
	return {
		staffs: state.payroll.staffs
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchAllStaff() {
			dispatch(fetchAllStaff())
		},
		selectStaff(staff) {
			dispatch(selectStaff(staff))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StaffList)

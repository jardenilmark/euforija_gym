import { connect } from 'react-redux'
import Staff from '../../../components/staff/StaffPage'
import { createStaff, addStaff } from '../../actions/staffActions'

function mapStateToProps(state) {
	return {
		formVisibility: state.staff.staffFormVisibility
	}
}

function mapDispatchToProps(dispatch) {
	return {
		async createStaff(user) {
			await dispatch(createStaff(user))
		},
		async addStaff() {
			await dispatch(addStaff())
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Staff)

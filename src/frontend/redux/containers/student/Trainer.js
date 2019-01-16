import { connect } from 'react-redux'
import Trainer from '../../../components/student/Trainer'
import { fetchStaff, setStaffFilter } from '../../actions/staffAction'

function mapDispatchToProps(dispatch) {
	return {
		async fetchStaff() {
			await dispatch(fetchStaff({ role: 'coach' }))
		},
		setStaffFilter(type) {
			dispatch(setStaffFilter(type))
		}
	}
}

function mapStateToProps(state) {
	return {
		staff: state.staff.staffList,
		type: state.staff.type
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Trainer)

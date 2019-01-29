import { connect } from 'react-redux'
import Trainer from '../../../components/student/TrainerPage'
import { fetchStaff, setStaffFilter } from '../../actions/staffActions'
import { setStepData, setActiveForm } from '../../actions/studentAction'

function mapDispatchToProps(dispatch) {
	return {
		async fetchStaff() {
			await dispatch(fetchStaff({ role: 'coach' }))
		},
		setStaffFilter(type) {
			dispatch(setStaffFilter(type))
		},
		setStepData(type, data) {
			dispatch(setStepData(type, data))
		},
		setActiveForm(active) {
			dispatch(setActiveForm(active))
		}
	}
}

function mapStateToProps(state) {
	return {
		staff: state.staff.staffList,
		trainer: state.student.trainer,
		type: state.staff.type
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Trainer)

import { connect } from 'react-redux'
import { checkIfDayPassed } from '../../actions/attendanceActions'
import Logs from '../../../components/attendance/Logs'

function mapStateToProps(state) {
	return {
		loggedIn: state.attendance.loggedIn,
		loggedOut: state.attendance.loggedOut,
		visitors: state.attendance.visitors,
		coachesIsLoading: state.attendance.coachesIsLoading,
		visitorIsLoading: state.attendance.visitorIsLoading
	}
}

function mapDispatchToProps(dispatch) {
	return {
		checkIfDayPassed() {
			dispatch(checkIfDayPassed())
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Logs)

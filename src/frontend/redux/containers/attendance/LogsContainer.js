import { connect } from 'react-redux'
import { getAttendance } from '../../actions/attendanceActions'
import Logs from '../../../components/attendance/Logs'

function mapStateToProps(state) {
	return {
		loggedIn: state.attendance.loggedIn,
		loggedOut: state.attendance.loggedOut,
		visitors: state.attendance.visitors
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getAttendance() {
			dispatch(getAttendance())
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Logs)

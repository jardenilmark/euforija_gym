import { connect } from 'react-redux'
import { tick } from '../../actions/attendanceActions'
import Logs from '../../../components/attendance/Logs'

function mapStateToProps(state) {
	return {
		loggedIn: state.attendance.loggedIn,
		loggedOut: state.attendance.loggedIn,
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

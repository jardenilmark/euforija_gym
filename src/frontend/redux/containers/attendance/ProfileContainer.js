import { connect } from 'react-redux'
import { getAttendance } from '../../actions/attendanceActions'
import Logs from '../../../components/attendance/Profile'

function mapStateToProps(state) {
	return {
		loggedUser: state.attendance.loggedUser
	}
}

export default connect(mapStateToProps)(Logs)

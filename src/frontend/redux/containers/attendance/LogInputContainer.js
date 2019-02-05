import { connect } from 'react-redux'
import { updateAttendance } from '../../actions/attendanceActions'
import LogInput from '../../../components/attendance/LogInput'

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {
		updateAttendance(user) {
			dispatch(updateAttendance(user))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LogInput)

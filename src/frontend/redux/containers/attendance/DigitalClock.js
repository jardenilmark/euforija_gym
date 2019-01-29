import { connect } from 'react-redux'
import { tick } from '../../actions/attendanceActions'
import Clock from '../../../components/attendance/Clock'

function mapStateToProps(state) {
	return {
		time: state.attendance.time
	}
}

function mapDispatchToProps(dispatch) {
	return {
		tick() {
			dispatch(tick())
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Clock)

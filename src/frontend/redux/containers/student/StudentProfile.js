import { connect } from 'react-redux'
import StudentProfile from '../../../components/student/StudentProfile'

function mapStateToProps(state) {
	return {
		clickedStudent: state.student.clickedStudent
	}
}

export default connect(
	mapStateToProps,
	null
)(StudentProfile)

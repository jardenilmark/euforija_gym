import { connect } from 'react-redux'
import {
	fetchStudents,
	toggleFormVisibility,
	toggleProfileVisibility,
	setClickedStudent,
	removeStudent,
	editStudentProfile
} from '../../actions/studentActions'
import StudentTable from '../../../components/student/StudentTable'

function mapStateToProps(state) {
	return {
		students: state.student.studentsList,
		isFetching: state.student.isFetching
	}
}

function mapDispatchToProps(dispatch) {
	return {
		async fetchStudents() {
			dispatch(fetchStudents())
		},
		toggleProfileVisibility(boolean) {
			dispatch(toggleProfileVisibility(boolean))
		},
		toggleFormVisibility(boolean) {
			dispatch(toggleFormVisibility(boolean))
		},
		setClickedStudent(student) {
			dispatch(setClickedStudent(student))
		},
		async removeStudent(student) {
			dispatch(removeStudent(student))
		},
		editStudentProfile(student) {
			dispatch(editStudentProfile(student))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StudentTable)

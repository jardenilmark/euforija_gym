import { connect } from 'react-redux'
import StudentPage from '../../../components/student/StudentPage'
import { toggleFormVisibility, toggleProfileVisibility } from '../../actions/studentActions'

function mapStateToProps(state) {
	return {
		formVisibility: state.student.formVisibility,
		profileVisibility: state.student.profileVisibility
	}
}

function mapDispatchToProps(dispatch) {
	return {
		toggleFormVisibility(boolean) {
			dispatch(toggleFormVisibility(boolean))
		},
		toggleProfileVisibility(boolean) {
			dispatch(toggleProfileVisibility(boolean))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StudentPage)

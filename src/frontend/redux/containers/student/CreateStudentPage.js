import { connect } from 'react-redux'
import CreatePage from '../../../components/student/CreatePage'
import { setActiveForm } from '../../actions/studentAction'

function mapDispatchToProps(dispatch) {
	return {
		setActiveForm(active) {
			dispatch(setActiveForm(active))
		}
	}
}

function mapStateToProps(state) {
	return {
		activeForm: state.student.activeForm
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CreatePage)

import { connect } from 'react-redux'
import CreatePage from '../../../components/student/CreatePage'
import { setActiveForm, setStepData } from '../../actions/studentAction'

function mapDispatchToProps(dispatch) {
	return {
		setActiveForm(active) {
			dispatch(setActiveForm(active))
		},
		setStepData(type, data) {
			dispatch(setStepData(type, data))
		}
	}
}

function mapStateToProps(state) {
	return {
		activeForm: state.student.activeForm,
		personal: state.student.personal,
		health: state.student.health,
		trainer: state.student.trainer,
		payment: state.student.payment
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CreatePage)

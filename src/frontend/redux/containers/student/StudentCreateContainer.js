import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import Create from '../../../components/student/CreateStudentForm'
import { setActiveForm, setStepData, createStudent } from '../../actions/studentActions'

function mapDispatchToProps(dispatch) {
	return {
		setActiveForm(active) {
			dispatch(setActiveForm(active))
		},
		setStepData(type, data) {
			dispatch(setStepData(type, data))
		},
		async createStudent(student) {
			await dispatch(createStudent(student))
		}
	}
}

function mapStateToProps(state) {
	return {
		activeForm: state.student.activeForm,
		personal: state.student.personal,
		health: state.student.health,
		trainer: state.student.trainer,
		paymentMethod: state.student.paymentMethod,
		croppedImage: state.student.croppedImage
	}
}

const Form = reduxForm({ form: 'createStudentForm' })(Create)
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form)

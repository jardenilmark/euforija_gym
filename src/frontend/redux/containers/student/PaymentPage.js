import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import PaymentPage from '../../../components/student/PaymentPage'
import { setPaymentMethod, setActiveForm } from '../../actions/studentActions'

function mapDispatchToProps(dispatch) {
	return {
		setPaymentMethod(method) {
			dispatch(setPaymentMethod(method))
		},
		setActiveForm(active) {
			dispatch(setActiveForm(active))
		}
	}
}

function mapStateToProps(state) {
	return {
		paymentMethod: state.student.paymentMethod
	}
}

let Form = reduxForm({ form: 'studentPaymentForm' })(PaymentPage)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form)

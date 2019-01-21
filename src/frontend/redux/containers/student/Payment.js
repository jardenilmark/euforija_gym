import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import PaymentPage from '../../../components/student/PaymentPage'
import { setPaymentMethod } from '../../actions/studentAction'

function mapDispatchToProps(dispatch) {
	return {
		setPaymentMethod(method) {
			dispatch(setPaymentMethod(method))
		}
	}
}

function mapStateToProps(state) {
	return {
		paymentMethod: state.student.paymentMethod
	}
}

let Form = reduxForm({ form: 'editSaleForm' })(PaymentPage)
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form)

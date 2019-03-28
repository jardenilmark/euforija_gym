import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import PaymentModal from '../../../components/student/PaymentModal'

function mapStateToProps(state) {
	return {
		paymentMethod: state.student.paymentMethod,
		trainingPrice: state.student.trainingPrice
	}
}

let Form = reduxForm({ form: 'studentRenewalForm' })(PaymentModal)

export default connect(
	mapStateToProps,
	null
)(Form)

import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import RenewModal from '../../../components/student/RenewModal'
import { setPaymentMethod, renewMembership } from '../../actions/studentActions'

function mapDispatchToProps(dispatch) {
	return {
		setPaymentMethod(method) {
			dispatch(setPaymentMethod(method))
		}
	}
}

function mapStateToProps(state) {
	return {
		paymentMethod: state.student.paymentMethod,
		trainingPrice: state.student.trainingPrice
	}
}

let Form = reduxForm({ form: 'studentRenewalForm' })(RenewModal)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form)

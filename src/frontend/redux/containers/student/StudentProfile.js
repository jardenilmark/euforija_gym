import { connect } from 'react-redux'
import StudentProfile from '../../../components/student/StudentProfile'
import { getPrice, renewMembership, makePayment } from '../../actions/studentActions'

function mapDispatchToProps(dispatch) {
	return {
		getPrice() {
			dispatch(getPrice())
		},
		renewMembership(amount, student) {
			dispatch(renewMembership(amount, student))
		},
		makePayment(amount, student) {
			dispatch(makePayment(amount, student))
		}
	}
}

function mapStateToProps(state) {
	return {
		clickedStudent: state.student.clickedStudent,
		trainingPrice: state.student.trainingPrice,
		paymentMethod: state.student.paymentMethod
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StudentProfile)

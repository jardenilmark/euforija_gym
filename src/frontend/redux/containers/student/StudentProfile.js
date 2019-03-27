import { connect } from 'react-redux'
import StudentProfile from '../../../components/student/StudentProfile'
import { getPrice, renewMembership } from '../../actions/studentActions'

function mapDispatchToProps(dispatch) {
	return {
		getPrice() {
			dispatch(getPrice())
		},
		renewMembership(amount, id) {
			dispatch(renewMembership(amount, id))
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

import { reduxForm } from 'redux-form'
import CreateStaff from '../../../components/staff/StaffForm'
import { connect } from 'react-redux'

function mapStateToProps(state) {
	return {
		initialValues: state.staff.initialValues,
		enableReinitialize: true
	}
}

const StaffForm = reduxForm({ form: 'createStaffForm' })(CreateStaff)

export default connect(mapStateToProps)(StaffForm)

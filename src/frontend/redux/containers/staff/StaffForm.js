import { reduxForm } from 'redux-form'
import CreateStaff from '../../../components/staff/StaffForm'
import { connect } from 'react-redux'

function mapStateToProps(state) {
	return {
		initialValues: state.staff.initialValues
	}
}

const StaffForm = reduxForm({ form: 'createStaffForm' })(CreateStaff)

export default connect(mapStateToProps)(StaffForm)

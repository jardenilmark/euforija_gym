import { reduxForm } from 'redux-form'
import CreateStaff from '../../../components/staff/StaffForm'

export default reduxForm({ form: 'createStaffForm' })(CreateStaff)

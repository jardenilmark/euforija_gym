import { reduxForm } from 'redux-form'
import CreateStaff from '../../../components/staff/CreateStaffForm'

export default reduxForm({ form: 'createStaffForm' })(CreateStaff)

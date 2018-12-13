import { reduxForm } from 'redux-form'
import Create from '../../../components/student/CreateStudentForm'

export default reduxForm({ form: 'createStudentForm' })(Create)

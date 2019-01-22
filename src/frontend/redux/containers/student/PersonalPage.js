import { reduxForm } from 'redux-form'
import Personal from '../../../components/student/PersonalPage'

export default reduxForm({ form: 'studentPersonalForm' })(Personal)

import { reduxForm } from 'redux-form'
import HealthPage from '../../../components/student/HealthPage'

export default reduxForm({ form: 'studentHealthForm' })(HealthPage)

import { reduxForm } from 'redux-form'
import LoginForm from '../../frontend/components/LoginForm'

export default reduxForm({ form: 'loginForm' })(LoginForm)

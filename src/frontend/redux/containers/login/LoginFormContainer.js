import { reduxForm } from 'redux-form'
import LoginForm from '../../../components/login/LoginForm'
// import { validate } from '../../frontend/validation'

export default reduxForm({ form: 'loginForm' })(LoginForm)

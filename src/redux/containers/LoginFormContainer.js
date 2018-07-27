import { reduxForm } from 'redux-form'
import LoginForm from '../../frontend/components/LoginForm'
// import { validate } from '../../frontend/validation'

export default reduxForm({ form: 'loginForm' })(LoginForm)

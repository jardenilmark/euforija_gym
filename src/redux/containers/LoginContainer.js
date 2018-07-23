import { connect } from 'react-redux'
import { handleLogin } from '../actions/loginActions'
import Login from '../../frontend/components/Login'

const mapDispatchToProps = dispatch => ({
  handleLogin: async (values) => dispatch(handleLogin(values))
})

export default connect(null, mapDispatchToProps)(Login)

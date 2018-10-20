import { connect } from 'react-redux'
import { handleLogin } from '../../actions/loginActions'
import Login from '../../../components/login/Login'

const mapDispatchToProps = dispatch => ({
	handleLogin: async values => dispatch(handleLogin(values))
})
export default connect(
	null,
	mapDispatchToProps
)(Login)

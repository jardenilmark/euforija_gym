import { connect } from 'react-redux'
import { handleLogin, hasJWT } from '../../actions/loginActions'
import Login from '../../../components/login/Login'

const mapDispatchToProps = dispatch => ({
	handleLogin: async values => dispatch(handleLogin(values)),
	hasJWT: () => dispatch(hasJWT())
})
export default connect(
	null,
	mapDispatchToProps
)(Login)

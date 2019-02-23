import { connect } from 'react-redux'
import { checkStorage, logout } from '../../actions/loginActions'
import HomeScreen from '../../../components/homescreen/HomeScreen'

function mapStateToProps(state) {
	return {
		userLogin: state.staff.userLogin,
		loginChecked: state.staff.loginChecked
	}
}

function mapDispatchToProps(dispatch) {
	return {
		checkStorage() {
			dispatch(checkStorage())
		},
		logout() {
			dispatch(logout())
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeScreen)

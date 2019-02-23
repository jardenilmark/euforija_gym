import { connect } from 'react-redux'
import { checkStorage } from '../../actions/loginActions'
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
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeScreen)

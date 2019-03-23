import { connect } from 'react-redux'
import { checkStorage, logout } from '../../actions/loginActions'
import { setPrice, toggleModal, onChangePrice } from '../../actions/studentActions'
import HomeScreen from '../../../components/homescreen/HomeScreen'

function mapStateToProps(state) {
	return {
		userLogin: state.staff.userLogin,
		loginChecked: state.staff.loginChecked,
		priceModal: state.student.priceModal,
		priceOnChange: state.student.priceOnChange
	}
}

function mapDispatchToProps(dispatch) {
	return {
		async checkStorage() {
			await dispatch(checkStorage())
		},
		async setPrice(price) {
			await dispatch(setPrice(price))
		},
		toggleModal(payload) {
			dispatch(toggleModal(payload))
		},
		onChangePrice(payload) {
			dispatch(onChangePrice(payload))
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

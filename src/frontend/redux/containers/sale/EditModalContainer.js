import { connect } from 'react-redux'
import { setModalState, addItem } from '../../actions/saleActions'
import PurchaseModal from '../../../components/sale/PurchaseModal'

function mapStateToProps(state) {
	return {
		modal: state.sale.modal,
		clickedItem: state.sale.clickedItem
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setModalState(state) {
			dispatch(setModalState(state))
		},
		addItemOverview(item, quantity) {
			dispatch(addItem(item, quantity))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PurchaseModal)

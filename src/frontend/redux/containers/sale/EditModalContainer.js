import { connect } from 'react-redux'
import { setModalState, addItemOverview } from '../../actions/saleAction'
import EditModal from '../../../components/sale/EditModal'

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
			dispatch(addItemOverview(item, quantity))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditModal)

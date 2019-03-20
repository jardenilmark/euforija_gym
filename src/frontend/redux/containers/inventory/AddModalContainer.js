import { connect } from 'react-redux'
import {
	createItem,
	fetchWholeInventory,
	setModalState,
	setFilteredInv
} from '../../actions/inventoryActions'
import AddModal from '../../../components/inventory/AddModal'

function mapStateToProps(state) {
	return {
		addModalState: state.inventory.addModalState
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setModalState(state, type) {
			dispatch(setModalState(state, type))
		},
		setFilteredInv(arr) {
			dispatch(setFilteredInv(arr))
		},
		async createItem(obj) {
			await dispatch(createItem(obj))
			await dispatch(fetchWholeInventory('/inventory', {}))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddModal)

import { connect } from 'react-redux'
import { setModalState, removeItem, fetchWholeInventory } from '../../actions/inventoryActions'
import DeleteModal from '../../../components/inventory/DeleteModal'

function mapStateToProps(state) {
	return {
		deleteModalState: state.inventory.deleteModalState,
		formId: state.inventory.formId,
		imageId: state.inventory.imageId
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setModalState(state, type) {
			dispatch(setModalState(state, type))
		},
		async removeItem(id, imageId) {
			await dispatch(removeItem(id, imageId))
		},
		async getInventory() {
			await dispatch(fetchWholeInventory({}))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DeleteModal)

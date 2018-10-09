import { connect } from 'react-redux'
import { setModalState, updateItem, fetchWholeInventory } from '../../actions/inventoryActions'
import EditModal from '../../../components/inventory/EditModal'

function mapStateToProps (state) {
  return {
    editModalState: state.inventory.editModalState,
    formId: state.inventory.formId,
    imageId: state.inventory.imageId
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    setModalState (state, type) {
      dispatch(setModalState(state, type))
    },
    async updateItem (id, imageId, obj) {
      await dispatch(updateItem(id, imageId, obj))
      await dispatch(fetchWholeInventory({}))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModal)

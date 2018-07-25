import { connect } from 'react-redux'
import { setModalState, updateItem, fetchWholeInventory } from '../actions/inventoryActions'
import EditModal from '../../components/EditModal'

function mapStateToProps (state) {
  return {
    editModalState: state.inventory.editModalState,
    formId: state.inventory.formId
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    setModalState (state, type) {
      dispatch(setModalState(state, type))
    },
    async updateItem (id, obj) {
      await dispatch(updateItem(id, obj))
      await dispatch(fetchWholeInventory())
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModal)

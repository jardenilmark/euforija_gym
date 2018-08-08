import { connect } from 'react-redux'
import { setModalState, removeItem, fetchWholeInventory } from '../../actions/inventoryActions'
import DeleteModal from '../../../components/inventory/DeleteModal'

function mapStateToProps (state) {
  return {
    deleteModalState: state.inventory.deleteModalState,
    formId: state.inventory.formId
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    setModalState (state, type) {
      dispatch(setModalState(state, type))
    },
    async removeItem (id) {
      await dispatch(removeItem(id))
    },
    async getInventory () {
      await dispatch(fetchWholeInventory())
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal)

import { connect } from 'react-redux'
import { createItem, fetchWholeInventory, setModalState } from '../../actions/inventoryActions'
import AddModal from '../../../components/inventory/AddModal'

function mapStateToProps (state) {
  return {
    addModalState: state.inventory.addModalState
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    setModalState (state, type) {
      dispatch(setModalState(state, type))
    },
    async createItem (obj) {
      await dispatch(createItem(obj))
      await dispatch(fetchWholeInventory())
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(AddModal)

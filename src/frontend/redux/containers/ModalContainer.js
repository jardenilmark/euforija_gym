import { connect } from 'react-redux'
import { createItem, fetchWholeInventory } from '../actions/inventoryActions'
import Modal from '../../components/Modal'

function mapDispatchToProps (dispatch) {
  return ({
    async createItem (obj) {
      await dispatch(createItem(obj))
      await dispatch(fetchWholeInventory())
    }
  })
}

export default connect(null, mapDispatchToProps)(Modal)

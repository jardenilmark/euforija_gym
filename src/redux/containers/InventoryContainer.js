import { connect } from 'react-redux'
import { fetchWholeInventory } from '../actions/inventoryActions'
import Inventory from '../../frontend/components/Inventory'

function mapStateToProps (state) {
  return {
    inventory: state.inventory.items
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    async getInventory () {
      await dispatch(fetchWholeInventory())
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)

import { connect } from 'react-redux'
import { fetchWholeInventory, setActiveItem, filterList } from '../actions/inventoryActions'
import Inventory from '../../components/Inventory'

function mapStateToProps (state) {
  return {
    inventory: state.inventory.items,
    activeItem: state.inventory.activeItem,
    filteredInv: state.inventory.filteredInv
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    async getInventory () {
      await dispatch(fetchWholeInventory())
    },
    async filterList (param) {
      await dispatch(filterList(param))
    },
    setActiveItem (name) {
      dispatch(setActiveItem(name))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)

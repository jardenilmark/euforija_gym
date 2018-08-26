import { connect } from 'react-redux'
import { fetchWholeInventory, setActiveItem, filterList, setFormValues, setModalState, setFormId, setFilteredInv } from '../../actions/inventoryActions'
import Inventory from '../../../components/inventory/Inventory'

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
      await dispatch(fetchWholeInventory({}))
    },
    async filterList (param) {
      await dispatch(filterList(param))
    },
    setActiveItem (name) {
      dispatch(setActiveItem(name))
    },
    setFormId (id) {
      dispatch(setFormId(id))
    },
    setModalState (state, type) {
      dispatch(setModalState(state, type))
    },
    setFormValues (id) {
      dispatch(setFormValues(id))
    },
    setFilteredInv (arr) {
      dispatch(setFilteredInv(arr))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)

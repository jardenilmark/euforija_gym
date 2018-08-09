import { connect } from 'react-redux'
import { setModalState, setClickedItem } from '../../actions/saleAction'
import { fetchWholeInventory } from '../../actions/inventoryActions'
import Sale from '../../../components/sale/Sale'

function mapStateToProps (state) {
  return {
    inventory: state.inventory.items,
    modal: state.sale.modal,
    overviewArr: state.sale.overviewArr
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    async getInventory () {
      await dispatch(fetchWholeInventory())
    },
    setModalState (state) {
      dispatch(setModalState(state))
    },
    setClickedItem (item) {
      dispatch(setClickedItem(item))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Sale)

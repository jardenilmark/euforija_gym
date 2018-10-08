import { connect } from 'react-redux'
import { setModalState, setClickedItem, updateSales } from '../../actions/saleAction'
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
      await dispatch(fetchWholeInventory({
        query: {
          quantity: {
            $gt: 0
          }
        }
      }))
    },
    setModalState (state) {
      dispatch(setModalState(state))
    },
    setClickedItem (item) {
      dispatch(setClickedItem(item))
    },
    async updateSales (items) {
      await dispatch(updateSales(items))
      await dispatch(fetchWholeInventory({
        query: {
          quantity: {
            $gt: 0
          }
        }
      }))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Sale)

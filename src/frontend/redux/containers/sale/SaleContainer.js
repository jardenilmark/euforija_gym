import { connect } from 'react-redux'
import {
	setModalState,
	setClickedItem,
	removeItem,
	togglePurchaseOverview,
	updateSales
} from '../../actions/saleActions'
import { fetchWholeInventory } from '../../actions/inventoryActions'
import Sale from '../../../components/sale/Sale'

function mapStateToProps(state) {
	return {
		inventory: state.inventory.items,
		modal: state.sale.modal,
		overviewArr: state.sale.overviewArr,
		isFetchingInventory: state.inventory.isFetchingInventory,
		purchaseOverviewState: state.sale.purchaseOverviewState
	}
}

function mapDispatchToProps(dispatch) {
	return {
		async getInventory() {
			await dispatch(
				fetchWholeInventory({
					query: {
						quantity: {
							$gt: 0
						}
					}
				})
			)
		},
		setModalState(state) {
			dispatch(setModalState(state))
		},
		setClickedItem(item) {
			dispatch(setClickedItem(item))
		},
		removeItem(arr, index) {
			dispatch(removeItem(arr, index))
		},
		togglePurchaseOverview() {
			dispatch(togglePurchaseOverview())
		},
		async updateSales(arr) {
			await dispatch(updateSales(arr))
			await dispatch(
				fetchWholeInventory({
					query: {
						quantity: {
							$gt: 0
						}
					}
				})
			)
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Sale)

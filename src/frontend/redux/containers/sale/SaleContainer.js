import { connect } from 'react-redux'
import {
	setModalState,
	setClickedItem,
	removeItem,
	togglePurchaseOverview,
	updateSales,
	clearCart
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
		clearCart() {
			dispatch(clearCart())
		},
		setModalState(state) {
			dispatch(setModalState(state))
		},
		setClickedItem(item) {
			dispatch(setClickedItem(item))
		},
		async removeItem(overviewArr, index) {
			dispatch(removeItem(overviewArr, index))
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

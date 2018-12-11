import { connect } from 'react-redux'
import {
	fetchWholeInventory,
	setActiveItem,
	filterList,
	setFormValues,
	setModalState,
	setFormId,
	setFilteredInv,
	setImageId,
	setPriceValue,
	setNameVal
} from '../../actions/inventoryActions'
import Inventory from '../../../components/inventory/Inventory'

function mapStateToProps(state) {
	return {
		inventory: state.inventory.items,
		activeItem: state.inventory.activeItem,
		filteredInv: state.inventory.filteredInv,
		priceOne: state.inventory.priceOne,
		priceTwo: state.inventory.priceTwo,
		nameVal: state.inventory.nameVal
	}
}

function mapDispatchToProps(dispatch) {
	return {
		async getInventory() {
			await dispatch(fetchWholeInventory({}))
		},
		async filterList(param) {
			await dispatch(filterList(param))
		},
		setNameVal(val) {
			dispatch(setNameVal(val))
		},
		setPriceValue(val, num) {
			dispatch(setPriceValue(val, num))
		},
		setActiveItem(name) {
			dispatch(setActiveItem(name))
		},
		setFormId(id) {
			dispatch(setFormId(id))
		},
		setImageId(id) {
			dispatch(setImageId(id))
		},
		setModalState(state, type) {
			dispatch(setModalState(state, type))
		},
		setFormValues(id) {
			dispatch(setFormValues(id))
		},
		setFilteredInv(arr) {
			dispatch(setFilteredInv(arr))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Inventory)

import Swal from 'sweetalert2'

const initialState = {
	modal: false,
	overviewArr: [],
	clickedItem: '',
	sales: [],
	byItem: false,
	purchaseOverviewState: false
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'SALE_MODAL_STATE':
			return {
				...state,
				modal: action.payload
			}
		case 'FETCH_SALES':
			return {
				...state,
				sales: action.payload
			}
		case 'CLICKED_ITEM':
			return {
				...state,
				clickedItem: action.payload
			}
		case 'ADD_ITEM':
			const item = action.payload[0]
			const quantity = action.payload[1]
			const overviewArr = state.overviewArr
			if (quantity <= item.quantity && quantity > 0) {
				const index = overviewArr.findIndex(obj => obj._id === item._id)
				const newItem = { ...item }
				newItem.quantity = quantity
				if (index !== -1) {
					overviewArr[index] = newItem
				} else {
					overviewArr.push(newItem)
				}
			} else {
				Swal.fire({
					type: 'error',
					title: 'Quantity entered is invalid or is more than the quantity in stock!',
					showConfirmButton: false,
					timer: 2000
				})
			}
			return {
				...state,
				overviewArr: overviewArr
			}
		case 'SALES_CATEGORY':
			return {
				...state,
				byItem: action.payload
			}
		case 'REMOVE_ITEM':
			console.log(action.payload)
			return {
				...state,
				overviewArr: action.payload
			}
		case 'SALES_UPDATED':
			return {
				...state,
				overviewArr: []
			}
		case 'TOGGLE_PURCHASE_OVERVIEW':
			return {
				...state,
				purchaseOverviewState: !state.purchaseOverviewState
			}
		case 'CLEAR_CART':
			return {
				...state,
				overviewArr: []
			}
		default:
			return state
	}
}

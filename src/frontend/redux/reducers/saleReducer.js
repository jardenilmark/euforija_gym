import swal from 'sweetalert'

const initialState = {
	modal: false,
	overviewArr: [],
	clickedItem: ''
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'SALE_MODAL_STATE':
			return {
				...state,
				modal: action.payload
			}
		case 'CLICKED_ITEM':
			return {
				...state,
				clickedItem: action.payload
			}
		case 'OVERVIEW_ARR':
			const item = action.payload[0]
			const quantity = action.payload[1]
			if (quantity <= item.quantity && quantity > 0) {
				const index = state.overviewArr.findIndex(obj => obj._id === item._id)
				const newItem = { ...item }
				newItem.quantity = quantity
				if (index !== -1) {
					state.overviewArr[index] = newItem
				} else {
					state.overviewArr.push(newItem)
				}
			} else {
				swal('Quantity is invalid')
			}
			return {
				...state
			}
		case 'SALES_UPDATED':
			swal('Sales confirmed')
			return {
				...state,
				overviewArr: []
			}
		default:
			return state
	}
}

import iziToast from 'izitoast'

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
				iziToast.error({
					title: 'ERROR',
					message: 'Quantity is invalid!',
					position: 'topRight'
				})
			}
			return {
				...state
			}
		case 'SALES_UPDATED':
			iziToast.success({
				title: 'SUCCESS',
				message: 'Purchase successful!',
				position: 'topRight'
			})
			return {
				...state,
				overviewArr: []
			}
		default:
			return state
	}
}

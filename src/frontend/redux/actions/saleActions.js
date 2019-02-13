import app from '../../client'
const salesApi = 'api/sales'
const inventoryApi = 'api/inventory'

export function setModalState(payload) {
	return dispatch => {
		dispatch({ type: 'SALE_MODAL_STATE', payload: payload })
	}
}

export function addItem(item, quantity) {
	console.log('item', [item, quantity])
	return dispatch => {
		dispatch({ type: 'ADD_ITEM', payload: [item, quantity] })
	}
}

export function removeItem(overviewArr, index) {
	console.log('ARR1', overviewArr)
	overviewArr.splice(index, 1)
	console.log('ARR', overviewArr)
	console.log('I', index)
	return dispatch => {
		dispatch({ type: 'REMOVE_ITEM', payload: overviewArr })
	}
}

export function setClickedItem(payload) {
	return dispatch => {
		dispatch({ type: 'CLICKED_ITEM', payload: payload })
	}
}

export function setChart(category) {
	return dispatch => {
		dispatch({ type: 'SALES_CATEGORY', payload: category })
	}
}

export function fetchSales() {
	return async dispatch => {
		const sales = await app
			.service(salesApi)
			.find({ query: { $select: { name: 1, price: 1, date: 1, _id: 0 } } })
		dispatch({ type: 'FETCH_SALES', payload: sales })
	}
}

export function updateSales(arr) {
	return async dispatch => {
		const items = arr.map(val => {
			return {
				name: val.name,
				quantity: val.quantity,
				price: val.price,
				date: new Date()
			}
		})
		await app.service(salesApi).create(items)
		for (const item of arr) {
			await app.service(inventoryApi).patch(item._id, {
				$inc: {
					quantity: -parseInt(item.quantity, 10)
				}
			})
		}
		dispatch({ type: 'SALES_UPDATED', payload: true })
	}
}

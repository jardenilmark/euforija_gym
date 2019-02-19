import app from '../../client'
import { compareData } from '../../helpers/sort'
import { converter, getFile } from '../../helpers/converter'
import iziToast from 'izitoast'
const inventoryApi = 'api/inventory'
const fileApi = 'api/file'

export function fetchWholeInventory(arg) {
	return async dispatch => {
		dispatch({ type: 'FETCHING_INVENTORY' })

		try {
			const items = await app.service(inventoryApi).find(arg)
			const images = await app.service(fileApi).find()
			items.map(item => {
				const image = images.find(data => item.image === data._id)
				item.imageId = item.image
				item.image = image.data
			})
			compareData(items, 'name')
			dispatch({ type: 'FETCHING_INVENTORY_SUCCESS', payload: items })
		} catch (e) {
			dispatch({ type: 'FETCHING_INVENTORY_FAILED', payload: [] })
		}
	}
}

export function setFilteredInv(arr) {
	return dispatch => {
		dispatch({ type: 'GET_FILTERED_INVENTORY', payload: arr })
	}
}

export function setPriceValue(val, num) {
	return dispatch => {
		dispatch({ type: `GET_PRICE_${num}`, payload: val })
	}
}

export function setNameVal(val) {
	return dispatch => {
		dispatch({ type: 'GET_NAME_VAL', payload: val })
	}
}

export function createItem(obj) {
	return async dispatch => {
		const base64 = await converter(obj.image)
		const data = await app.service(fileApi).create({
			data: base64
		})
		await app.service(inventoryApi).create({
			name: obj.name,
			quantity: parseInt(obj.quantity, 10),
			price: parseInt(obj.price, 10),
			image: data._id,
			unit: obj.unit
		})
		iziToast.success({
			title: 'SUCCESS',
			message: 'Item added successfully!',
			position: 'topRight'
		})
		dispatch({ type: 'ITEM_CREATED', payload: true })
	}
}

// TODO: fix "No file chosen" text in the upload photo field eventhough image file is already pre-filled
// possible reason: a function which delegates the props of the image file is not invoked
// since there is no detected change in the field

export function updateItem(id, imageId, obj) {
	return async dispatch => {
		const base64 = await converter(obj.image)
		await app.service(fileApi).update(imageId, {
			data: base64
		})
		obj.image = imageId
		obj.quantity = parseInt(obj.quantity, 10)
		obj.price = parseInt(obj.price, 10)
		await app.service(inventoryApi).update(id, obj)
		iziToast.success({
			title: 'SUCCESS',
			message: 'Item updated successfully!',
			position: 'topRight'
		})
		dispatch({ type: 'ITEM_UPDATED', payload: true })
	}
}

export function removeItem(id, imageId) {
	return async dispatch => {
		await app.service(inventoryApi).remove(id)
		await app.service(fileApi).remove(imageId)
		iziToast.warning({
			title: 'SUCCESS',
			message: 'Item removed successfully!',
			position: 'topRight'
		})
		dispatch({ type: 'ITEM_DELETED', payload: true })
	}
}

export function setFormValues(item) {
	console.log(getFile(item.image))
	return async dispatch => {
		const value = {
			name: item.name,
			price: item.price,
			quantity: item.quantity,
			image: getFile(item.image),
			unit: item.unit
		}
		dispatch({ type: 'GET_INITIAL_VALUES', payload: value })
	}
}

export function setModalState(state, type) {
	return dispatch => {
		dispatch({ type: type, payload: state })
	}
}

export function setActiveItem(name) {
	return dispatch => {
		dispatch({ type: 'GET_ACTIVE_ITEM_INVENTORY', payload: name })
	}
}

export function setFormId(id) {
	return dispatch => {
		dispatch({ type: 'GET_EDIT_FORM_ID', payload: id })
	}
}

export function setImageId(id) {
	return dispatch => {
		dispatch({ type: 'GET_IMAGE_ID', payload: id })
	}
}

const getValue = param => {
	const value = parseInt(param, 10)
	if (isNaN(value)) {
		return param
	}
	return value
}

export function filterList(param) {
	return async dispatch => {
		dispatch({ type: 'FILTERING_INVENTORY' })
		let query =
			param.name === 'name'
				? {
						[param.name]: {
							$search: getValue(param.value),
							$caseSensitive: false
						}
				  }
				: {
						[param.name]: {
							$lte: getValue(param.valueTwo),
							$gte: getValue(param.value)
						}
				  }
		try {
			const items = await app.service(inventoryApi).find({ query })
			const imageData = await app.service(fileApi).find()
			items.map(item => {
				const image = imageData.find(data => item.image === data._id)
				item.imageId = item.image
				item.image = image.data
			})
			compareData(items, 'name')
			dispatch({ type: 'FILTERING_INVENTORY_SUCCESS', payload: items })
		} catch (e) {
			dispatch({ type: 'FILTERING_INVENTORY_FAILED', payload: e })
		}
	}
}

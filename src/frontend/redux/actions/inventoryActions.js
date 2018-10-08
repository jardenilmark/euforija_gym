import app from '../../client'
import { compareData } from '../../sort'
import { converter } from '../../converter'
import iziToast from 'izitoast'
const inventoryApi = 'api/inventory'
const fileApi = 'api/file'

export function fetchWholeInventory (arg) {
  return async (dispatch) => {
    const items = await app.service(inventoryApi).find(arg)
    const imageData = await app.service(fileApi).find()
    items.map(item => {
      const image = imageData.find(data => item.image === data._id)
      item.imageId = item.image
      item.image = image.data
    })
    compareData(items, 'name')
    dispatch({ type: 'GET_INVENTORY', payload: items })
  }
}

export function setFilteredInv (arr) {
  return (dispatch) => {
    dispatch({ type: 'GET_FILTERED_INVENTORY', payload: arr })
  }
}

export function createItem (obj) {
  return async (dispatch) => {
    const base64 = await converter(obj.image)
    const data = await app.service(fileApi).create({
      data: base64
    })
    await app.service(inventoryApi).create({
      name: obj.name,
      quantity: parseInt(obj.quantity, 10),
      price: parseInt(obj.price, 10),
      image: data._id
    })
    iziToast.success({
      title: 'OK',
      message: 'Successfully Added an Item!'
    })
    dispatch({ type: 'ITEM_CREATED', payload: true })
  }
}

export function updateItem (id, imageId, obj) {
  return async (dispatch) => {
    const base64 = await converter(obj.image)
    await app.service(fileApi).update(imageId, {
      data: base64
    })
    obj.image = imageId
    obj.quantity = parseInt(obj.quantity, 10)
    obj.price = parseInt(obj.price, 10)
    await app.service(inventoryApi).update(id, obj)
    iziToast.success({
      title: 'OK',
      message: 'Successfully Updated an Item!'
    })
    dispatch({ type: 'ITEM_UPDATED', payload: true })
  }
}

export function removeItem (id, imageId) {
  return async (dispatch) => {
    await app.service(inventoryApi).remove(id)
    await app.service(fileApi).remove(imageId)
    dispatch({ type: 'ITEM_DELETED', payload: true })
  }
}

export function setFormValues (item) {
  return async (dispatch) => {
    const value = {
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      image: item.image // need to fix this
    }
    dispatch({ type: 'GET_INITIAL_VALUES', payload: value })
  }
}

export function setModalState (state, type) {
  return (dispatch) => {
    dispatch({ type: type, payload: state })
  }
}

export function setActiveItem (name) {
  return (dispatch) => {
    dispatch({ type: 'GET_ACTIVE_ITEM_INVENTORY', payload: name })
  }
}

export function setFormId (id) {
  return (dispatch) => {
    dispatch({ type: 'GET_EDIT_FORM_ID', payload: id })
  }
}

export function setImageId (id) {
  return (dispatch) => {
    dispatch({ type: 'GET_IMAGE_ID', payload: id })
  }
}

const getValue = (param) => {
  const value = parseInt(param, 10)
  if (isNaN(value)) {
    return param
  }
  return value
}

export function filterList (param) {
  return async (dispatch) => {
    let query = (param.name === 'name') ? {
      [param.name]: {
        $search: getValue(param.value),
        $caseSensitive: false
      }
    } : {
      [param.name]: getValue(param.value)
    }
    const items = await app.service(inventoryApi).find({ query })
    const imageData = await app.service(fileApi).find()
    items.map(item => {
      const image = imageData.find(data => item.image === data._id)
      item.imageId = item.image
      item.image = image.data
    })
    compareData(items, 'name')
    dispatch({ type: 'GET_FILTERED_INVENTORY', payload: items })
  }
}

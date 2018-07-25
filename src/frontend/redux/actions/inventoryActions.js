import app from '../../client'
import {compareData} from '../../sort'
const api = 'api/inventory'

export function fetchWholeInventory () {
  return async (dispatch) => {
    const items = await app.service(api).find()
    compareData(items, 'name')
    dispatch({type: 'GET_INVENTORY', payload: items})
  }
}

export function createItem (obj) {
  return async (dispatch) => {
    await app.service(api).create({
      name: obj.name,
      quantity: parseInt(obj.quantity),
      price: parseInt(obj.price)
    })
    dispatch({type: 'ITEM_CREATED', payload: true})
  }
}

export function updateItem (id, data) {
  return async (dispatch) => {
    await app.service(api).update(id, data)
    dispatch({type: 'ITEM_UPDATED', payload: true})
  }
}

export function setFormValues (item) {
  return async (dispatch) => {
    const value = {
      name: item.name,
      price: item.price,
      quantity: item.quantity
    }
    dispatch({type: 'GET_INITIAL_VALUES', payload: value})
  }
}

export function setModalState (state, type) {
  return (dispatch) => {
    dispatch({type: type, payload: state})
  }
}

export function setActiveItem (name) {
  return (dispatch) => {
    dispatch({type: 'GET_ACTIVE_ITEM_INVENTORY', payload: name})
  }
}

export function setFormId (id) {
  return (dispatch) => {
    dispatch({type: 'GET_EDIT_FORM_ID', payload: id})
  }
}

const getValue = (param) => {
  const value = parseInt(param)
  if (isNaN(value)) {
    return param
  }
  return value
}

export function filterList (param) {
  return async (dispatch) => {
    const items = await app.service(api).find({
      query: {
        [param.name]: getValue(param.value)
      }
    })
    dispatch({type: 'GET_FILTERED_INVENTORY', payload: items})
  }
}

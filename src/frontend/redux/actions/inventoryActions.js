import app from '../../client'
import { compareData } from '../../sort'
import iziToast from 'izitoast'
const api = 'api/inventory'

export function fetchWholeInventory (arg) {
  return async (dispatch) => {
    const items = await app.service(api).find(arg)
    compareData(items, 'name')
    dispatch({ type: 'GET_INVENTORY', payload: items })
  }
}

export function setFilteredInv (arr) {
  return (dispatch) => {
    dispatch({ type: 'GET_FILTERED_INVENTORY', payload: arr })
  }
}

function getBase64 (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

const converter = async (targetFile) => {
  const data = await getBase64(targetFile)
  return data
}

export function createItem (obj) {
  return async (dispatch) => {
    //to add image
    console.log(obj)
    console.log(await converter(obj.image))
    // await app.service(api).create({
    //   name: obj.name,
    //   quantity: parseInt(obj.quantity, 10),
    //   price: parseInt(obj.price, 10),
    //   image: null //to change
    // })
    // iziToast.success({
    //   title: 'OK',
    //   message: 'Successfully Added an Item!'
    // })
    dispatch({ type: 'ITEM_CREATED', payload: true })
  }
}

export function updateItem (id, data) {
  return async (dispatch) => {
    await app.service(api).update(id, data)
    iziToast.success({
      title: 'OK',
      message: 'Successfully Updated an Item!'
    })
    dispatch({ type: 'ITEM_UPDATED', payload: true })
  }
}

export function removeItem (id) {
  return async (dispatch) => {
    await app.service(api).remove(id)
    dispatch({ type: 'ITEM_DELETED', payload: true })
  }
}

export function setFormValues (item) {
  return async (dispatch) => {
    const value = {
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      image: item.image
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
    const items = await app.service(api).find({ query })
    dispatch({ type: 'GET_FILTERED_INVENTORY', payload: items })
  }
}

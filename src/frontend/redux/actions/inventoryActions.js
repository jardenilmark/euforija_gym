import app from '../../client'
const api = 'api/inventory'

export function fetchWholeInventory () {
  return async (dispatch) => {
    const items = await app.service(api).find()
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

export function setActiveItem (name) {
  return (dispatch) => {
    dispatch({type: 'GET_ACTIVE_ITEM_INVENTORY', payload: name})
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

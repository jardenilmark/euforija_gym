export function fetchWholeInventory () {
  return async (dispatch) => {
    const response = await fetch('http://localhost:3000/api/inventory')
    const items = await response.json()
    dispatch({type: 'GET_INVENTORY', payload: items})
  }
}

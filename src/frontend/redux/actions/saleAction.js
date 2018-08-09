import app from '../../client'
const api = 'api/inventory'

export function setModalState (payload) {
  return (dispatch) => {
    dispatch({ type: 'SALE_MODAL_STATE', payload: payload })
  }
}

export function addItemOverview (payload) {
  return (dispatch) => {
    dispatch({ type: 'OVERVIEW_ARR', payload: payload })
  }
}

export function setClickedItem (payload) {
  return (dispatch) => {
    dispatch({ type: 'CLICKED_ITEM', payload: payload })
  }
}

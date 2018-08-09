const initialState = {
  modal: false,
  overviewArr: [],
  clickedItem: ''
}

export default function reducer (state = initialState, action) {
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
    const load = action.payload
    const index = state.overviewArr.findIndex(obj => obj._id === load._id)
    if (index !== -1) {
      state.overviewArr[index] = load
    } else {
      state.overviewArr.push(load)
    }
    return {
      ...state
    }
  default:
    return state
  }
}

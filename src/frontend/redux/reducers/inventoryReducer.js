const initialState = {
  items: [],
  activeItem: 'name',
  filteredInv: []
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'GET_INVENTORY':
      return {
        ...state,
        items: action.payload
      }
    case 'GET_ACTIVE_ITEM_INVENTORY':
      return {
        ...state,
        activeItem: action.payload
      }
    case 'GET_FILTERED_INVENTORY':
      return {
        ...state,
        filteredInv: action.payload
      }
    default:
      return state
  }
}

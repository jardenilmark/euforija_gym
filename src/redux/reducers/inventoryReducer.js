const initialState = {
  items: []
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'GET_INVENTORY':
      return {
        ...state,
        items: action.payload
      }
    default:
      return state
  }
}

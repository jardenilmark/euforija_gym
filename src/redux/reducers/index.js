import { combineReducers } from 'redux'
import inventoryReducer from './inventoryReducer'

export default combineReducers({
  inventory: inventoryReducer
})

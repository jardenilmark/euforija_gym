import { combineReducers } from 'redux'
import inventoryReducer from './inventoryReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  inventory: inventoryReducer,
  form: formReducer
})

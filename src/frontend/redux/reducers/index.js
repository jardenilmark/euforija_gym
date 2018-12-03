import { combineReducers } from 'redux'
import inventoryReducer from './inventoryReducer'
import saleReducer from './saleReducer'
import staffReducer from './staffReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
	inventory: inventoryReducer,
	form: formReducer,
	sale: saleReducer,
	staff: staffReducer
})

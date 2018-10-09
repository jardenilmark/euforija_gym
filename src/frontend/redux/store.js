import reducers from './reducers/index'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
const middleware = applyMiddleware(promise(), thunk, createLogger())

export default createStore(reducers, middleware)

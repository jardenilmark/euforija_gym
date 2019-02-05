import reducers from './reducers/index'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

const logger = createLogger({
	collapsed: true,
	predicate: (getState, action) => action.type !== 'START_CLOCK_TICK'
})

const middleware = applyMiddleware(promise(), thunk, logger)

export default createStore(reducers, middleware)

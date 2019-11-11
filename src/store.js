//instaimage-client/src/store.js
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import ReduxThunk from 'redux-thunk'
import api from './middleware/api'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk, api)
)

const store = createStore(reducer, enhancer)

export default store
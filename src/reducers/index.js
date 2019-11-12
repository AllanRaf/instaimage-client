//instaimage-client/src/reducers/index.js
import { combineReducers } from 'redux'
import user from './user'
import auth from './auth'
import image from './image'

export default combineReducers({
  user, auth, image
})
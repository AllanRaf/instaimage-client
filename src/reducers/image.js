//instaimage-client/src/reducers/image.js
import { IMAGE_POST_SUCCESS } from '../actions/image'

export default function (state = "", action = {}) {
    switch (action.type) {
      case IMAGE_POST_SUCCESS :
        return action.payload
      default:
        return state
    }
  }
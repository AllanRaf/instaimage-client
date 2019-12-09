//instaimage-client/src/reducers/image.js
import {
  IMAGE_POST_SUCCESS,
  GET_ALL_IMAGES_SUCCESS,
  GET_ONE_USER_IMAGES_SUCCESS
} from "../actions/image";

export default function(state = [], action = {}) {
  switch (action.type) {
    case IMAGE_POST_SUCCESS:
      return [action.payload, ...state];
    case GET_ALL_IMAGES_SUCCESS:
      return [...action.payload];
    case GET_ONE_USER_IMAGES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

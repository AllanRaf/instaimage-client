//instaimage-client/src/actions/auth.js
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/auth";

const token = localStorage.getItem("jwt");
const initialState = token ? token : null;

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("jwt", action.payload.jwt);
      return action.payload;
    case LOGOUT_SUCCESS:
      localStorage.removeItem("jwt")
      return null
    default:
      return state;
  }
};
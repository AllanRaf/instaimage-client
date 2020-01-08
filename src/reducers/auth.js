//instaimage-client/src/actions/auth.js
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../constants";

//const token = localStorage.getItem("jwt");
const token = JSON.parse(localStorage.getItem("user"));
console.log("token is", token);
const initialState = token ? token : null;

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("LOGIN CREDENTIALS", action.payload);
      let userDetails = JSON.stringify(action.payload);
      localStorage.setItem("user", userDetails);
      console.log("local storage is", localStorage.user);

      return action.payload;
    case LOGOUT_SUCCESS:
      localStorage.clear();
      return null;
    default:
      return state;
  }
};

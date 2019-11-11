//instaimage-client/src/actions/auth.js

import { LOGIN_SUCCESS } from "../actions/auth";

const token = localStorage.getItem("jwt");
const initialState = token ? token : null;

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      //localStorage.setItem("jwt", action.payload.jwt, "username", action.payload.username);
      //console.log('LOCALSTORAGE', localStorage)
      return action.payload.jwt;
    default:
      return state;
  }
};
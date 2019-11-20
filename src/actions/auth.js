//instaimage-client/src/actions/auth.js
/*export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";*/
import { LOGIN_SUCCESS } from "../constants";

export const login = (email, password) => {
  return {
    apiCall: true,
    method: "post",
    path: "/login",
    body: { email, password },
    successType: LOGIN_SUCCESS
  };
};

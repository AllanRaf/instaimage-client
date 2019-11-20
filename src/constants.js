const baseUrl =
  process.env.REACT_APP_CHATAPP_SERVER_URL || "http://localhost:4000";

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export { LOGIN_SUCCESS, LOGOUT_SUCCESS, baseUrl };

//instaimage-client/src/actions/auth.js
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = (email, password) => {console.log('LOGIN FUNCTION ACTIONS')
return {
  apiCall: true,
  method: "post",
  path: "/login",
  body: { email, password },
  successType: LOGIN_SUCCESS
}
};
//instaimage_client/src/api.js
import request from "superagent";
import { baseUrl } from "../constants";
//const baseUrl = "http://localhost:4000";

export const API_LOADING = "@API/LOADING";
export const API_DONE = "@API/DONE";
export const API_ERROR = "@API/ERROR";

const defaults = {
  apiCall: true,
  method: "get",
  path: "/",
  body: null,
  loadingType: API_LOADING,
  errorType: API_ERROR,
  doneType: API_DONE,
  successType: "@API/SUCCESS_NOT_HANDLED"
};

export default store => next => action => {
  if (!action.apiCall) {
    // This is not for me, passing along
    return next(action);
  }

  const requestAction = { ...defaults, ...action };
  console.log("in api.js auth is with payload changed", store.getState().auth);
  const token = store.getState().auth;
  const { method, path, body } = requestAction;

  const auth = token ? `Bearer ${token.jwt}` : undefined;

  store.dispatch({
    type: requestAction.loadingType,
    request: requestAction
  });
  console.log("the path is", body);
  request[method](`${baseUrl}${path}`)
    .set("Authorization", auth)
    .send(body)
    .then(response => {
      console.log("path in api.js is", `${path}`);
      store.dispatch({
        type: requestAction.successType,
        payload: response.body
      });

      store.dispatch({
        type: requestAction.doneType,
        request: requestAction
      });
    })
    .catch(err => {
      console.error(err);

      next({
        type: requestAction.errorType,
        error: err.message,
        request: requestAction
      });
    });
};

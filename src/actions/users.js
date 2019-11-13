//instaimage-client/src/actions/users.js
import request from 'superagent'
import { LOGOUT_SUCCESS } from '../actions/auth'

const baseUrl = 'http://localhost:4000'

const registeruser = (username, email, password) => (dispatch, getState) =>{
    request
    .post(`${baseUrl}/user`)
    .send({username, email, password})
    .catch(console.error)
  }
export const logoutuser = () => (dispatch, getState) => {
  //event.preventDefault()
  console.log('logging out')
  localStorage.removeItem("jwt")
  dispatch({type: LOGOUT_SUCCESS, payload: null })
}

export default registeruser
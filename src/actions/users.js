//instaimage-client/src/actions/users.js
import request from 'superagent'

const baseUrl = 'localhost:4000'

const registeruser = (username, email, password) => (dispatch, getState) =>{
  
    request
    .post(`${baseUrl}/user`)
    .send({email, password})
    .catch(console.error)
  
  }

  export default registeruser
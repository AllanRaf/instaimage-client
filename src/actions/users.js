//instaimage-client/src/actions/users.js
import request from 'superagent'

const baseUrl = 'http://localhost:4000'

const registeruser = (username, email, password) => (dispatch, getState) =>{
  console.log('REGISTERING NEW USER', username)
    request
    .post(`${baseUrl}/user`)
    .send({username, email, password})
    .catch(console.error)
  
  }

  export default registeruser
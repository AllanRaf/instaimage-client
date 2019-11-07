//instaimage-client/src/reducers/user.js

export default function (state = "", action = {}) {
    switch (action.type) {
      case "REGISTER_USER":
        return action.payload
      default:
        return state
    }
  }
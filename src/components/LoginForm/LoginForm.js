//instaimage-clien/src/components/LoginForm/LoginForm.js
import React from "react";
import { Link } from "react-router-dom";

export default function LoginForm(props) {
  return (
    <div className="flex-center">
      <Link to="/">
        <button className="btn btn-outline-primary btn-space button-container">
          Return to Home Page
        </button>
      </Link>
      <form className="heading flex-center" onSubmit={props.onSubmit}>
        <h1>Log in to the Insta Image App</h1>

        <label>Email</label>
        <br />
        <input type="text" name="email" onChange={props.onChange} />
        <br />
        <label>Password</label>
        <br />
        <input type="password" name="password" onChange={props.onChange} />
        <br />
        <button className="create-user-button" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}

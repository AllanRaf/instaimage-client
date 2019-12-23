//instaimage-client/src/components/RegisterForm.js
import React from "react";
import { Link } from "react-router-dom";

export default function RegisterForm(props) {
  return (
    <>
      <div className="flex-center button-container">
        <Link to="/">
          <button className="btn btn-outline-primary btn-space">
            Return to Home Page
          </button>
        </Link>
      </div>
      <form className="heading flex-center" onSubmit={props.onSubmit}>
        <h1>Sign Up to post images</h1>

        <label>Username</label>
        <br />
        <input type="text" name="username" onChange={props.onChange} />
        <br />
        <label>Email</label>
        <br />
        <input type="text" name="email" onChange={props.onChange} />
        <br />
        <label>Password</label>
        <br />
        <input type="password" name="password" onChange={props.onChange} />
        <br />
        <button className="create-user-button" type="submit">
          Create New User
        </button>
        {props.valid ? (
          <p>Please complete the fields above</p>
        ) : (
          <p>Email/password must not be empty</p>
        )}
      </form>
    </>
  );
}

import React from "react";

export default function ImageForm(props) {
  return (
    <div className="flex-center">
      <h1>
        Welcome back{" "}
        {props.name ? <strong>{props.name}</strong> : <strong>there</strong>}
      </h1>
      <button
        className="btn btn-outline-primary btn-space"
        name="logout"
        type="submit"
        value="logout"
        onClick={props.logout}
      >
        Logout
      </button>
      <form className="register-form" onSubmit={props.onSubmit}>
        <h1>Add an image</h1>
        <label>Title</label>
        <br />
        <input
          className="register-input"
          type="text"
          name="title"
          value={props.values.title}
          onChange={props.onChange}
        />
        <br />
        <label>URL</label>
        <br />
        <input
          className="register-input"
          type="text"
          onChange={props.onChange}
          name="url"
          value={props.values.url}
        />
        <br />
        <button
          className="btn btn-outline-primary btn-space button-container"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

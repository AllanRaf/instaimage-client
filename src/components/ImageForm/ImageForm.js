import React from "react";

export default function ImageForm(props) {
  console.log("props are", props.name);
  return (
    <div className="flex-center">
      <h1>
        Hello{" "}
        {props.name ? <strong>{props.name}</strong> : <strong>there</strong>}
      </h1>
      <button name="logout" type="submit" value="logout" onClick={props.logout}>
        Logout
      </button>
      <form onSubmit={props.onSubmit}>
        <h1>Add an image</h1>
        <label>Title</label>
        <br />
        <input
          type="text"
          name="title"
          value={props.values.title}
          onChange={props.onChange}
        />
        <br />
        <label>URL</label>
        <br />
        <input
          type="text"
          onChange={props.onChange}
          name="url"
          value={props.values.url}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

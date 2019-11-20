//instaimage-clien/src/components/ImageListForm/ImageList.js
import React from "react";
import { Link } from "react-router-dom";

export default function ImageList(props) {
  console.log("ImageList", props);

  return (
    <div className="flex-center third-heading">
      <h2>Here are a list of images</h2>
      {props.images &&
        props.images.map(image => (
          <div key={image.id}>
            <h3>{image.title}</h3>
            <img
              className="border border-primary rounded w-50 h-50 flex-center"
              src={image.url}
              alt={image.title}
            />
            <div className="flex-center">
              This image was posted by
              <strong>
                {image.User ? (
                  <Link to="/user"> {image.User.username} </Link>
                ) : (
                  <p>loading...</p>
                )}
              </strong>
            </div>
            <div className="flex-center">
              {props.auth ? (
                image.userId === props.auth.user_id && (
                  <button id={image.id} onClick={props.deleteImage}>
                    delete
                  </button>
                )
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}

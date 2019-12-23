//instaimage-clien/src/components/ImageListForm/ImageList.js
import React from "react";

export default function ImageList(props) {
  console.log("one users images props", props);

  return (
    <div className="flex-center third-heading">
      <h2>
        Here are a list of images
        {props.oneUsersImages ? (
          <span>
            for
            {props.oneUsersImages}. Click here for to see{" "}
            <b onClick={props.getAllImages}>all images</b>
          </span>
        ) : (
          <span>for all users</span>
        )}
        {props.oneUsersImages && (
          <button id={props.images[0].userId} onClick={props.followUser}>
            Follow this user
          </button>
        )}
      </h2>
      {props.images &&
        props.images.map(image => (
          <div key={image.id}>
            <h3>{image.title}</h3>
            <img
              className="border border-primary rounded w-50 h-50 flex-center"
              src={image.url}
              alt={image.title}
            />
            <div className="flex-center image-container">
              Posted by:{" "}
              <strong>
                {image.User ? (
                  <b
                    onClick={props.getOneUsersImages}
                    id={image.userId}
                    value={image.User.username}
                  >
                    {image.User.username}
                  </b>
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

//instaimage-client/src/actions/image.js
export const IMAGE_POST_SUCCESS = "IMAGE_POST_SUCCESS";
export const GET_ALL_IMAGES_SUCCESS = "GET_ALL_IMAGES_SUCCESS";
export const DELETE_IMAGE_SUCCESS = "DELETE_IMAGE_SUCCESS";
export const GET_ONE_USER_IMAGES_SUCCESS = "GET_ONE_USER_IMAGES_SUCCESS";

export const postImage = state => {
  return {
    apiCall: true,
    method: "post",
    path: "/image",
    body: state,
    successType: IMAGE_POST_SUCCESS
  };
};

export const getImages = () => {
  return {
    apiCall: true,
    method: "get",
    path: "/image",
    body: null,
    successType: GET_ALL_IMAGES_SUCCESS
  };
};

export const deleteImage = imageId => {
  return {
    apiCall: true,
    method: "delete",
    path: "/image",
    body: { imageId },
    successType: DELETE_IMAGE_SUCCESS
  };
};

export const getImagesOneUser = userId => {
  return {
    apiCall: true,
    method: "get",
    path: `/image/${userId}`,
    body: { userId },
    successType: GET_ONE_USER_IMAGES_SUCCESS
  };
};

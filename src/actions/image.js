//instaimage-client/src/actions/image.js
export const IMAGE_POST_SUCCESS = "IMAGE_POST_SUCCESS";

export const postImage = (state) => {
    console.log('IMAGE POST SUCCESS ACTION', state)
return {
  apiCall: true,
  method: "post",
  path: "/image",
  body: state,
  successType: IMAGE_POST_SUCCESS
}
};
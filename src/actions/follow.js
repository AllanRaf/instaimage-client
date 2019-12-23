import { FOLLOW_USER_SUCCESS } from "../constants";

export const followUser = followerId => {
  return {
    apiCall: true,
    method: "post",
    path: `/follow/${followerId}`,
    body: null,
    successType: FOLLOW_USER_SUCCESS
  };
};

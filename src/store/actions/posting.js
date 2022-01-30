export const setPostImage = (postImage) => ({
  type: "SET_IMAGE",
  payload: postImage,
});

export const setPostDescription = (postDescription) => ({
  type: "SET_DESCRIPTION",
  payload: postDescription,
});

export const setClearPosting = () => ({
  type: "CLEAR_POSTING",
});

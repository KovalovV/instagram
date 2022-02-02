export const setCurrentUserPost = (postData) => ({
  type: "SET_USER_POSTS",
  payload: postData,
});

export const setCurrentUserSavedPost = (savedPostData) => ({
  type: "SET_USER_SAVED_POSTS",
  payload: savedPostData,
});

export const setSelectedPost = (selectedPostData) => ({
  type: "SET_SELECTED_POST",
  payload: selectedPostData,
});

export const setSelectedPostComments = (selectedPostCommentsData) => ({
  type: "SET_POST_COMMENTS",
  payload: selectedPostCommentsData,
});

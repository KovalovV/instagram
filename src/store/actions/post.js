export const setCurrentUserPost = (postData) => ({
  type: "SET_USER_POSTS",
  payload: postData,
});

export const setCurrentUserSavedPost = (savedPostData) => ({
  type: "SET_USER_SAVED_POSTS",
  payload: savedPostData,
});

//   export const setIsUserLoading: (state, { payload }) => {
//     isUserLoading = payload;
//   };

//   export const logOutUser: (state) => {
//     currentUser = {};
//     authed = false;
//   };

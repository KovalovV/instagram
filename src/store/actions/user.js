export const setCurrentUser = (userData) => ({
  type: "SET_CURRENT_USER",
  payload: userData,
});

export const setSavedPost = (selectedPostCommentsData) => ({
  type: "SET_SAVED_POST",
  payload: selectedPostCommentsData,
});

export const removeSavedPost = (selectedPostCommentsData) => ({
  type: "REMOVE_SAVED_POST",
  payload: selectedPostCommentsData,
});

//   export const setIsUserLoading: (state, { payload }) => {
//     isUserLoading = payload;
//   };

//   export const logOutUser: (state) => {
//     currentUser = {};
//     authed = false;
//   };

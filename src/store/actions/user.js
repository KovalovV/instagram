export const setCurrentUser = (userData) => ({
  type: "SET_CURRENT_USER",
  payload: userData,
});

export const setUpdatedUser = (updatedUserData) => ({
  type: "SET_UPDATED_USER",
  payload: updatedUserData,
});

//   export const setIsUserLoading: (state, { payload }) => {
//     isUserLoading = payload;
//   };

//   export const logOutUser: (state) => {
//     currentUser = {};
//     authed = false;
//   };

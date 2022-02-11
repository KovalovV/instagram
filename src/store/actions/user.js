export const setCurrentUser = (userData) => ({
  type: "SET_CURRENT_USER",
  payload: userData,
});

export const setUpdatedUser = (updatedUserData) => ({
  type: "SET_UPDATED_USER",
  payload: updatedUserData,
});

export const setIsUserLoading = (isLoading) => ({
  type: "IS_USER_LOADING",
  payload: isLoading,
});

export const signOutUser = () => ({
  type: "SIGN_OUT_USER",
});

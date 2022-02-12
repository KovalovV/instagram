import { api } from "api";
import { setSelectedUserProfile } from "store/actions/selectedUser";

export const setSelectedUserProfileThunk = (login) => async (dispatch) => {
  try {
    const selectedUser = await api.user.getUserByLogin(login);
    dispatch(setSelectedUserProfile(selectedUser));
    return 1;
  } catch (error) {
    return Promise.reject(error);
  }
};

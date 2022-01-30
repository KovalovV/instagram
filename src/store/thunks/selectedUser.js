import { api } from "api";
import { setSelectedUserProfile } from "store/actions/selectedUser";

export const setSelectedUserProfileThunk = (login) => async (dispatch) => {
  const selectedUser = await api.user.getUserByLogin(login);

  dispatch(setSelectedUserProfile(selectedUser));
};

import { api } from "api";
import { setOutcomeUser } from "store/actions/call";

export const setOutcomeUserThunk = (userId) => async (dispatch) => {
  const authUserData = await api.user.getUserById(userId);
  const res = authUserData.data();
  dispatch(setOutcomeUser(res));
};

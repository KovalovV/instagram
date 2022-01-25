import { api } from "api";
import { setCurrentUser } from "store/actions/user";

export const googleAuthThunk = () => async (dispatch) => {
  const { user } = await api.user.googleAuth();

  const loggedUser = await api.user.getUserById(user.uid);
  const loggedUserData = loggedUser.data();

  dispatch(setCurrentUser(loggedUserData));
};

export const signInUserThunk = (userData) => async (dispatch) => {
  try {
    const { user } = await api.user.signInUser(userData);

    const loggedUser = await api.user.getUserById(user.uid);
    const loggedUserData = loggedUser.data();

    dispatch(setCurrentUser(loggedUserData));

    return 0;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const signUpUserThunk = (userData) => async (dispatch) => {
  try {
    const { user } = await api.user.signUpUser(userData);

    api.user.setUser(userData, user.uid);
    const newUser = await api.user.getUserById(user.uid);
    const newUserData = newUser.data();

    dispatch(setCurrentUser(newUserData));

    return 0;
  } catch (err) {
    return Promise.reject(err);
  }
};

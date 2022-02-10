import { api } from "api";
import { setCurrentUser, setUpdatedUser } from "store/actions/user";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";

export const setCurrentUserThunk = () => async (dispatch) => {
  const auth = getAuth();
  try {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const authUserData = await api.user.getUserById(user.uid);
        const res = authUserData.data();
        dispatch(setCurrentUser(res));
      } else {
        toast.error("User not exist");
      }
    });
    return true;
  } catch (error) {
    return Promise.reject(error);
  }
};

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
  } catch (error) {
    return Promise.reject(error);
  }
};

export const signUpUserThunk = (userData) => async (dispatch) => {
  try {
    if (!(await api.user.getUserByLogin(userData.login))) {
      const { user } = await api.user.signUpUser(userData);

      api.user.setUser(userData, user.uid);
      const newUser = await api.user.getUserById(user.uid);
      const newUserData = newUser.data();

      dispatch(setCurrentUser(newUserData));
    } else {
      throw Error("This login is already exist");
    }
    return 0;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const setUpdatedUserThunk = (userId) => async (dispatch) => {
  const user = await api.user.getUserById(userId);
  const userData = user.data();

  dispatch(setUpdatedUser(userData));
};

import { api } from "api";
import {
  setCurrentUserPost,
  setCurrentUserSavedPost,
} from "store/actions/post";

export const setCurrentUserPostThunk = (userId) => async (dispatch) => {
  const userPosts = await api.post.getAllUserPosts(userId);

  // const loggedUser = await api.user.getUserById(user.uid);
  // const loggedUserData = loggedUser.data();

  dispatch(setCurrentUserPost(userPosts));
};

export const setCurrentUserSavedPostThunk = (saved) => async (dispatch) => {
  const userSavedPosts = await api.post.getAllUserSavedPosts(saved);

  // const loggedUser = await api.user.getUserById(user.uid);
  // const loggedUserData = loggedUser.data();

  dispatch(setCurrentUserSavedPost(userSavedPosts));
};

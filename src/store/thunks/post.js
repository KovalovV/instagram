import { api } from "api";
import {
  setCurrentUserPost,
  setCurrentUserSavedPost,
} from "store/actions/post";

export const setCurrentUserPostsThunk = (userId) => async (dispatch) => {
  const userPosts = await api.post.getAllUserPosts(userId);

  dispatch(setCurrentUserPost(userPosts));
};

export const setCurrentUserSavedPostsThunk = (saved) => async (dispatch) => {
  const userSavedPosts = await api.post.getAllUserSavedPosts(saved);

  dispatch(setCurrentUserSavedPost(userSavedPosts));
};

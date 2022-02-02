import { api } from "api";
import {
  setCurrentUserPost,
  setCurrentUserSavedPost,
  setSelectedPost,
  setSelectedPostComments,
} from "store/actions/post";
import { setSelectedUserProfile } from "store/actions/selectedUser";

export const setCurrentUserPostsThunk = (userId) => async (dispatch) => {
  const userPosts = await api.post.getAllUserPosts(userId);

  dispatch(setCurrentUserPost(userPosts));
};

export const setCurrentUserSavedPostsThunk = (saved) => async (dispatch) => {
  const userSavedPosts =
    saved === undefined || !saved.length
      ? []
      : await api.post.getAllUserSavedPosts(saved);

  dispatch(setCurrentUserSavedPost(userSavedPosts));
};

export const setSelectedPostThunk = (postId) => async (dispatch) => {
  const selectedPost = await api.post.getPostById(postId);
  const selectedPostData = selectedPost.data();

  const selectedUser = await api.user.getUserById(selectedPostData.userID);
  const selectedUserData = selectedUser.data();

  dispatch(setSelectedUserProfile(selectedUserData));
  dispatch(setSelectedPost(selectedPostData));
};

export const setSelectedPostCommentsThunk = (postId) => async (dispatch) => {
  const selectedPostComments = await api.post.getAllPostCommentsById(postId);

  dispatch(setSelectedPostComments(selectedPostComments));
};

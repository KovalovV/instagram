import { api } from "api";
import { setClearPosting } from "store/actions/posting";
import { setUpdatedUserThunk } from "./user";

export const setUserNewPostThunk = (postData, userId) => async (dispatch) => {
  try {
    await api.post.addUserPost(postData, userId);
    dispatch(setUpdatedUserThunk(userId));
    dispatch(setClearPosting());
    return 1;
  } catch (error) {
    return Promise.reject(error);
  }
};

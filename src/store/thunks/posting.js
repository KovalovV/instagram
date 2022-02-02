import { api } from "api";
import { setClearPosting } from "store/actions/posting";

export const setUserNewPostThunk = (postData, userId) => async (dispatch) => {
  await api.post.setUserPost(postData, userId);

  dispatch(setClearPosting());
};

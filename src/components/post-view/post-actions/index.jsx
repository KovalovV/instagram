/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { api } from "api";

import { setSelectedPostThunk } from "store/thunks/post";
import { setCurrentUserThunk } from "store/thunks/user";

import { Icon } from "components/common/icons";

import { PostAction } from "./styles";

const PostActions = () => {
  const dispatch = useDispatch();

  const params = useParams();
  const { postId } = params;

  const currentUser = useSelector((state) => state.user.currentUser);
  const { id: currentUserId, saved } = currentUser;

  const { likes } = useSelector((state) => state.post.selectedPost);

  const isLikedPost = () =>
    likes && likes.some((like) => like === currentUserId);
  const onClickLike = async () => {
    if (isLikedPost()) {
      await api.post.removeUserLike(postId, currentUserId);
      dispatch(setSelectedPostThunk(params.postId));
    } else {
      await api.post.setUserLike(postId, currentUserId);
      dispatch(setSelectedPostThunk(params.postId));
    }
  };

  const onClickComment = () => false;

  const isSavedPost = () => saved && saved.some((post) => post === postId);
  const onClickSave = async () => {
    if (isSavedPost()) {
      await api.post.removeUserSavedPost(postId, currentUserId);
      dispatch(setCurrentUserThunk());
    } else {
      await api.post.setUserSavedPost(postId, currentUserId);
      dispatch(setCurrentUserThunk());
    }
  };
  const actionPostName = ["heart", "borderComment", "saved"];
  const actionFnName = [onClickLike, onClickComment, onClickSave];

  return (
    <PostAction>
      {actionPostName.map((icon, index) => (
        <Icon
          key={icon}
          icon={
            // eslint-disable-next-line no-nested-ternary
            icon === "saved" && isSavedPost()
              ? "filledSavedIcon"
              : icon === "heart" && isLikedPost()
              ? "filledHeartIcon"
              : `${icon}Icon`
          }
          width="24px"
          height="24px"
          color="#262626"
          fill={icon === "heart" && isLikedPost() ? "#ed4956" : "#262626"}
          onClick={actionFnName[index]}
        />
      ))}
    </PostAction>
  );
};

export default PostActions;

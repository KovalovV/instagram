/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { api } from "api";

import { setUpdatedUserThunk } from "store/thunks/user";
import { setSelectedPostThunk } from "store/thunks/post";

import { Icon } from "components/common/icons";

import { PostAction } from "./styles";

const PostActions = ({ currentUserId, saved, postId, likes, onChangeFeed }) => {
  const location = useLocation();

  const dispatch = useDispatch();

  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const isLikedPost = useCallback(
    () => likes && likes.some((like) => like === currentUserId),
    [likes, currentUserId]
  );

  const isSavedPost = useCallback(
    () => saved && saved.some((post) => post === postId),
    [postId, saved]
  );

  const handleChangeFeed = () => {
    onChangeFeed(postId, isLiked);
  };

  const onClickLike = async () => {
    if (isLikedPost()) {
      setIsLiked(false);
      await api.post.removeUserLike(postId, currentUserId);
    } else {
      setIsLiked(true);
      await api.post.addUserLike(postId, currentUserId);
    }
    if (location.pathname === "/") {
      handleChangeFeed();
    }
    dispatch(setSelectedPostThunk(postId));
  };

  const onClickComment = () => false;

  const onClickSave = async () => {
    if (isSavedPost()) {
      setIsSaved(false);
      await api.post.removeUserSavedPost(postId, currentUserId);
    } else {
      setIsSaved(true);
      await api.post.addUserSavedPost(postId, currentUserId);
    }
    dispatch(setUpdatedUserThunk(currentUserId));
    dispatch(setSelectedPostThunk(postId));
  };
  const actionPostName = ["heart", "borderComment", "saved"];
  const actionFnName = [onClickLike, onClickComment, onClickSave];

  useEffect(() => {
    setIsLiked(isLikedPost());
  }, [isLikedPost]);

  useEffect(() => {
    setIsSaved(isSavedPost());
  }, [isSavedPost]);

  return (
    <PostAction>
      {actionPostName.map((icon, index) => (
        <Icon
          key={icon}
          icon={
            // eslint-disable-next-line no-nested-ternary
            icon === "saved" && isSaved
              ? "filledSavedIcon"
              : icon === "heart" && isLiked
              ? "filledHeartIcon"
              : `${icon}Icon`
          }
          width="24px"
          height="24px"
          color="#262626"
          fill={icon === "heart" && isLiked ? "#ed4956" : "#262626"}
          onClick={actionFnName[index]}
        />
      ))}
    </PostAction>
  );
};

export default PostActions;

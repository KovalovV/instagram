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
  console.log("currentUserId", currentUserId);
  console.log("saved", saved);
  console.log("postId", postId);
  console.log("likes", likes);

  const location = useLocation();

  const dispatch = useDispatch();

  // const [likesLength, setLikesLength] = useState(0);
  // console.log("likesLength", likesLength);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // const showLike = () =>
  //   likes && isLiked
  //     ? setLikesLength((prevState) => prevState + 1)
  //     : setLikesLength((prevState) => prevState - 1);

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
    console.log("isLikedPost()", isLikedPost());
    if (isLikedPost()) {
      setIsLiked(false);
      await api.post.removeUserLike(postId, currentUserId);
    } else {
      setIsLiked(true);
      await api.post.setUserLike(postId, currentUserId);
    }
    if (location.pathname === "/home") {
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
      await api.post.setUserSavedPost(postId, currentUserId);
    }
    dispatch(setUpdatedUserThunk(currentUserId));
    // dispatch(setSelectedPostThunk(postId));
  };
  const actionPostName = ["heart", "borderComment", "saved"];
  const actionFnName = [onClickLike, onClickComment, onClickSave];

  useEffect(() => {
    setIsLiked(isLikedPost());
  }, [isLikedPost]);

  useEffect(() => {
    setIsSaved(isSavedPost());
  }, [isSavedPost]);

  // useEffect(() => {
  //   setLikesLength(likes.length);
  // });

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

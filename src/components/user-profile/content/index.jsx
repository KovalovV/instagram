/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Icon } from "components/common/icons";
import EmptyPosts from "components/common/empty-posts";

import {
  setCurrentUserPostsThunk,
  setCurrentUserSavedPostsThunk,
} from "store/thunks/post";

import {
  ContentType,
  ContentTypeItem,
  Posts,
  PostItemWrapper,
  PostItem,
  InfoItem,
  ExtraInfo,
} from "./styles";

const Content = ({ isAuthUserPage }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { id, login, saved } = useSelector((state) =>
    isAuthUserPage
      ? state.user.currentUser
      : state.selectedUser.selectedUserProfile
  );
  const { posts, saved: savedPosts } = useSelector((state) => state.post);

  const [content, setContent] = useState(posts);
  const [activeType, setActiveType] = useState("posts");

  useEffect(() => {
    setContent(posts);
  }, [posts]);

  useEffect(() => {
    dispatch(setCurrentUserPostsThunk(id));
    dispatch(setCurrentUserSavedPostsThunk(saved));
  }, [dispatch, id, saved]);

  const onClickPosts = (e) => {
    setActiveType(`${e.target.id}`);
    setContent(posts);
  };

  const onClickVideo = (e) => {
    setActiveType(`${e.target.id}`);
    setContent([]);
  };

  const onClickSaved = (e) => {
    setActiveType(`${e.target.id}`);
    setContent(savedPosts);
  };

  const onClickTag = (e) => {
    setActiveType(`${e.target.id}`);
    setContent([]);
  };

  const contentLoadName = [
    onClickPosts,
    onClickVideo,
    onClickSaved,
    onClickTag,
  ];
  const contentTypeName = isAuthUserPage
    ? ["posts", "video", "saved", "tagged"]
    : ["posts", "tagged"];

  const onKeyDown = () => false;

  return (
    <>
      <ContentType>
        {contentTypeName.map((type, index) => (
          <ContentTypeItem
            id={`${type}`}
            className={activeType === type && "activeType"}
            role="button"
            tabIndex={index}
            key={`${type}-${index}`}
            onClick={contentLoadName[index]}
            onKeyDown={onKeyDown}
          >
            <Icon id={`${type}`} icon={`${type}Icon`} />{" "}
            <span id={`${type}`}>{` ${type}`}</span>
          </ContentTypeItem>
        ))}
      </ContentType>
      <Posts>
        {Boolean(content.length) &&
          content.map((post, index) => (
            <PostItemWrapper key={`${post.id}`}>
              <PostItem key={index}>
                <img src={post.image} alt="Post" />
              </PostItem>
              <ExtraInfo onClick={() => navigate(`/p/${post.id}`)}>
                <InfoItem key={1}>
                  <Icon icon="filledHeartIcon" fill="#fff" />
                  <span>{post.likes.length}</span>
                </InfoItem>
                <InfoItem key={41}>
                  <Icon icon="commentIcon" fill="#fff" />
                  <span>{post.comments.length}</span>
                </InfoItem>
              </ExtraInfo>
            </PostItemWrapper>
          ))}
      </Posts>
      <EmptyPosts contentLength={content.length} />
    </>
  );
};

export default Content;

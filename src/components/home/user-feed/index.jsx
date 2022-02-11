/* eslint-disable react/no-array-index-key */
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { api } from "api";

import ShortUserInfo from "components/common/short-user-info";
import PostActions from "components/common/post-actions";
import UserComment from "components/common/user-comment";
import AddComment from "components/common/add-comment";

import EmptyPosts from "components/common/empty-posts";

import Date from "components/common/date";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";

import { StyledUserFeed, Post, Image, LikeInfo, AllComments } from "./styles";

const UserFeed = () => {
  const [feed, setFeed] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id, saved } = useSelector((state) => state.user.currentUser);

  const onChangeFeed = (postId, isLiked) => {
    setFeed((prevState) => {
      const indexChangedPost = prevState.findIndex(
        (post) => post.id === postId
      );
      const leftPart = prevState.slice(0, indexChangedPost);
      const rightPart = prevState.slice(indexChangedPost + 1);

      const changedPost = {
        ...prevState[indexChangedPost],
        likes: isLiked
          ? prevState[indexChangedPost].likes.filter((userId) => userId !== id)
          : [...prevState[indexChangedPost].likes, id],
      };

      return [...leftPart, changedPost, ...rightPart];
    });
  };

  const fetchPostData = useCallback(async () => {
    setIsLoading(true);
    const posts = id ? await api.user.getUserFeed(id) : [];
    setFeed(posts);
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    const componentMounted = new AbortController();
    fetchPostData();
    return () => componentMounted.abort();
  }, [fetchPostData]);

  return isLoading ? (
    <StyledUserFeed>
      <Post>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ margin: 1 }}>
            <Skeleton variant="circular">
              <Avatar />
            </Skeleton>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Skeleton width="150px">
              <Typography>.</Typography>
            </Skeleton>
          </Box>
        </Box>
        <Skeleton variant="rectangular" width="100%">
          <div style={{ paddingTop: "100%" }} />
        </Skeleton>
      </Post>
    </StyledUserFeed>
  ) : (
    <StyledUserFeed>
      {feed &&
        feed.map((post, index) => (
          <Post key={`${post.id}-${index}`}>
            <ShortUserInfo userId={post.userID} width="32px" height="32px" />
            <Image>
              <img src={post.image} alt="Post" />
            </Image>
            <PostActions
              currentUserId={id}
              saved={saved}
              postId={post.id}
              likes={post.likes}
              onChangeFeed={onChangeFeed}
            />
            <LikeInfo>{post.likes && post.likes.length} likes</LikeInfo>
            <UserComment userId={post.userID} description={post.description} />
            <AllComments>
              <Link to={`/p/${post.id}`}>
                View all {post.comments.length} comments
              </Link>
            </AllComments>
            <Date date={post.timestamp} marginLeft />
            <AddComment postId={post.id} />
          </Post>
        ))}
      <EmptyPosts contentLength={feed.length} />
    </StyledUserFeed>
  );
};

export default UserFeed;

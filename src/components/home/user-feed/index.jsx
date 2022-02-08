import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

import { api } from "api";

import ShortUserInfo from "components/common/short-user-info";
import PostActions from "components/common/post-actions";
import UserComment from "components/common/user-comment";
import AddComment from "components/common/add-comment";

import EmptyPosts from "components/common/empty-posts";

import Spinner from "components/common/spinner";

import Date from "components/common/date";

import { StyledUserFeed, Post, Image, LikeInfo } from "./styles";

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
    const posts = await api.user.getUserFeed(id);
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
      <Spinner with="100px" height="100px" />
    </StyledUserFeed>
  ) : (
    <StyledUserFeed>
      {feed && feed.length ? (
        feed.map((post, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Post key={`${post.id}-${index}`}>
            <ShortUserInfo userId={post.userID} />
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
            <Date date={post.timestamp} marginLeft />
            <AddComment postId={post.id} />
          </Post>
        ))
      ) : (
        <EmptyPosts contentLength={feed.length} />
      )}
    </StyledUserFeed>
  );
};

export default UserFeed;

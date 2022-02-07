/* eslint-disable no-unused-vars */
import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { api } from "api";

import ShortUserInfo from "components/common/short-user-info";
import PostActions from "components/common/post-actions";
import UserComment from "components/common/user-comment";
import AddComment from "components/common/add-comment";
import UserSuggestions from "components/home/user-suggestions";

import LoaderScreen from "components/common/loader-screen";

import { Icon } from "components/common/icons";
import Date from "components/common/date";

import {
  MainContainer,
  UserFeed,
  Post,
  Image,
  LikeInfo,
  AsideContainer,
  AsideFeed,
  HeaderDetails,
  HelpList,
  AsideFooter,
} from "./styles";

const Home = () => {
  const [feed, setFeed] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id, avatar, name, login, saved } = useSelector(
    (state) => state.user.currentUser
  );

  const helpUserCategory = [
    "About",
    "Help",
    "Press",
    "API",
    "Jobs",
    "Privacy",
    "Terms",
    "Locations",
    "Top",
    "Accounts",
    "Hashtags",
    "Language",
  ];

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

  if (isLoading) {
    return <LoaderScreen />;
  }

  return (
    <MainContainer>
      <UserFeed>
        {feed &&
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
              <UserComment
                userId={post.userID}
                description={post.description}
              />
              <Date date={post.timestamp} marginLeft />
              <AddComment postId={post.id} />
            </Post>
          ))}
      </UserFeed>
      <AsideContainer>
        <AsideFeed>
          <HeaderDetails>
            <Link to={`/${login}`}>
              <img src={avatar} alt="Avatar" />
            </Link>
            <div>
              <h1>
                <Link to={`/${login}`}>{login}</Link>
              </h1>
              <p>{name}</p>
            </div>
          </HeaderDetails>
          <UserSuggestions />
          <HelpList>
            {helpUserCategory.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </HelpList>
          <AsideFooter>© 2022 Instagram from Vitala Kovalov</AsideFooter>
        </AsideFeed>
      </AsideContainer>
    </MainContainer>
  );
};

export default Home;

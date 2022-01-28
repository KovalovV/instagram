import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Icon } from "components/common/icons";

import {
  setCurrentUserPostThunk,
  setCurrentUserSavedPostThunk,
} from "store/thunks/post";

import { ContentType, Posts, PostItem } from "./styles";

const Content = () => {
  const contentTypeName = ["posts", "video", "saved", "tag"];

  const dispatch = useDispatch();
  const { id, saved } = useSelector((state) => state.user.currentUser);
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(setCurrentUserPostThunk(id));
    dispatch(setCurrentUserSavedPostThunk(saved));
  }, [dispatch, id, saved]);

  return (
    <>
      <ContentType>
        {contentTypeName.map((type) => (
          <a key={type}>
            <Icon icon={`${type}Icon`} /> <span>{` ${type}`}</span>
          </a>
        ))}
      </ContentType>
      <Posts>
        {posts &&
          posts.map((post, index) => {
            console.log("posts", posts);
            console.log("post", post);

            return (
              // eslint-disable-next-line react/no-array-index-key
              <PostItem key={index}>
                <img src={post.image} alt="Post" />
              </PostItem>
            );
          })}
      </Posts>
    </>
  );
};

export default Content;

import { useEffect, useCallback, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import {
  setSelectedPostThunk,
  setSelectedPostCommentsThunk,
} from "store/thunks/post";

import ShortUserInfo from "components/common/short-user-info";
import PostActions from "components/common/post-actions";
import UserComment from "components/common/user-comment";
import AddComment from "components/common/add-comment";
import Spinner from "components/common/spinner";

import { Icon } from "components/common/icons";
import Date from "components/common/date";

import {
  ModalWrapper,
  PostContainer,
  Image,
  MobileImage,
  Details,
  Comments,
  LikeInfo,
  ActionContainer,
} from "./styles";

const PostView = () => {
  const params = useParams();

  const navigate = useNavigate();
  const modalWrap = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  const { id: currentUserId } = useSelector((state) => state.user.currentUser);

  const { login, saved } = useSelector(
    (state) => state.selectedUser.selectedUserProfile
  );
  const {
    id: postId,
    userID: userId,
    image,
    description,
    likes,
    timestamp: postTimestamp,
  } = useSelector((state) => state.post.selectedPost);
  const comments = useSelector((state) => state.post.comments);

  const dispatch = useDispatch();

  const fetchPostData = useCallback(async () => {
    setIsLoading(true);
    await dispatch(setSelectedPostThunk(params.postId));
    await dispatch(setSelectedPostCommentsThunk(params.postId));
    setIsLoading(false);
  }, [params.postId]);

  useEffect(() => {
    fetchPostData();
  }, [fetchPostData]);

  const onClickClose = () => {
    modalWrap.current.style.display = "none";
    navigate(`/${login}`);
    return false;
  };

  const onKeyDownClose = (key) => {
    if (key.keyCode === 27) {
      modalWrap.current.style.display = "none";
      navigate(`/${login}`);
    }
    return false;
  };

  return (
    <ModalWrapper ref={modalWrap} onKeyDown={onKeyDownClose} tabIndex="0">
      <Icon className="close" icon="closeModalIcon" onClick={onClickClose} />
      {isLoading ? (
        <Spinner width="100px" height="100px" />
      ) : (
        <PostContainer>
          <Image>
            <div className="image-container">
              <img src={image} alt="Post" />
            </div>
          </Image>
          <Details>
            <ShortUserInfo userId={userId} />
            <MobileImage>
              <div className="image-container">
                <img src={image} alt="Post" />
              </div>
            </MobileImage>
            <Comments>
              <div className="description">
                <UserComment
                  userId={userId}
                  description={description}
                  postTimestamp={postTimestamp}
                  // eslint-disable-next-line react/jsx-boolean-value
                  withAvatar="false"
                  withDate
                />
                {comments &&
                  comments.map(
                    ({
                      id: commentId,
                      content,
                      timestamp: commentTimestamp,
                      user: { id: authorId },
                    }) => (
                      <UserComment
                        key={commentId}
                        userId={authorId}
                        description={content}
                        postTimestamp={commentTimestamp}
                        withAvatar
                        withDate
                      />
                    )
                  )}
              </div>
            </Comments>
            <ActionContainer>
              <PostActions
                currentUserId={currentUserId}
                saved={saved}
                postId={postId}
                likes={likes}
              />
              <LikeInfo>{likes && likes.length} likes</LikeInfo>
              <Date date={postTimestamp} uppercase marginLeft />
              <AddComment postId={postId} />
            </ActionContainer>
          </Details>
        </PostContainer>
      )}
    </ModalWrapper>
  );
};

export default PostView;

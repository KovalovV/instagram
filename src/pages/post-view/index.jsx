import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";

import { formatDate } from "utils/date";

import {
  setSelectedPostThunk,
  setSelectedPostCommentsThunk,
} from "store/thunks/post";

import PostActions from "components/post-view/post-actions";
import AddComment from "components/post-view/comment";

import { Icon } from "components/common/icons";
import Date from "components/common/date";

import {
  ModalWrapper,
  PostContainer,
  Image,
  MobileImage,
  Details,
  HeaderDetails,
  Comments,
  ActionContainer,
  DescriptionHeader,
  LikeInfo,
} from "./styles";

const PostView = () => {
  const params = useParams();
  const { postId } = params;

  const navigate = useNavigate();
  const modalWrap = useRef(null);

  const { login, avatar } = useSelector(
    (state) => state.selectedUser.selectedUserProfile
  );
  const {
    image,
    description,
    likes,
    timestamp: postTimestamp,
  } = useSelector((state) => state.post.selectedPost);
  const comments = useSelector((state) => state.post.comments);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedPostThunk(postId));
    dispatch(setSelectedPostCommentsThunk(postId));
  }, [dispatch, postId]);

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
      <PostContainer>
        <Image>
          <div className="image-container">
            <img src={image} alt="Post" />
          </div>
        </Image>
        <Details>
          <HeaderDetails>
            <Link to={`/${login}`}>
              <img src={avatar} alt="Avatar" />
            </Link>
            <h1>
              <Link to={`/${login}`}>{login}</Link>
            </h1>
          </HeaderDetails>
          <MobileImage>
            <div className="image-container">
              <img src={image} alt="Post" />
            </div>
          </MobileImage>
          <Comments>
            <div className="description">
              <DescriptionHeader>
                <Link to={`/${login}`}>
                  <img src={avatar} alt="Avatar" />
                </Link>
                <div>
                  <span>
                    <span className="login">
                      <Link to={`/${login}`}>{login}</Link>
                    </span>{" "}
                    {description}
                  </span>
                  <Date>
                    {postTimestamp && formatDate(postTimestamp.seconds * 1000)}
                  </Date>
                </div>
              </DescriptionHeader>
              {comments &&
                comments.map(
                  ({
                    id,
                    content,
                    timestamp: commentTimestamp,
                    user: { avatar: commentAvatar, login: commentLogin },
                  }) => (
                    <DescriptionHeader key={id}>
                      <Link to={`/${commentLogin}`}>
                        <img src={commentAvatar} alt="Avatar" />
                      </Link>
                      <div>
                        <span>
                          <span className="login">
                            <Link to={`/${commentLogin}`}>{commentLogin}</Link>
                          </span>{" "}
                          {content}
                        </span>
                        <Date>
                          {commentTimestamp &&
                            formatDate(commentTimestamp.seconds * 1000)}
                        </Date>
                      </div>
                    </DescriptionHeader>
                  )
                )}
            </div>
          </Comments>
          <ActionContainer>
            <PostActions />
            <LikeInfo>{likes && likes.length} likes</LikeInfo>
            <Date uppercase marginLeft>
              {postTimestamp && formatDate(postTimestamp.seconds * 1000)}
            </Date>
            <AddComment postId={postId} />
          </ActionContainer>
        </Details>
      </PostContainer>
    </ModalWrapper>
  );
};

export default PostView;

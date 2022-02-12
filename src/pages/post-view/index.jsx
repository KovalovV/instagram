import { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  setSelectedPostThunk,
  setSelectedPostCommentsThunk,
} from "store/thunks/post";

import Modal from "components/common/modal";
import { Icon } from "components/common/icons";
import Button from "components/common/button";

import MoreOptionsModal from "components/post-view/more-options-modal";

import ShortUserInfo from "components/common/short-user-info";
import PostActions from "components/common/post-actions";
import UserComment from "components/common/user-comment";
import AddComment from "components/common/add-comment";

import Date from "components/common/date";

// import { api } from "api";

import {
  Flex,
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

  const [modal, setModal] = useState({
    show: false,
    modalType: "followers",
  });
  const [isLoading, setIsLoading] = useState(true);

  const currentUser = useSelector((state) => state.user.currentUser);

  const selectedPost = useSelector((state) => state.post.selectedPost);
  const comments = useSelector((state) => state.post.comments);

  const dispatch = useDispatch();

  const handleModal = (typeModal) => {
    setModal((prevState) => ({
      ...prevState,
      show: true,
      modalType: typeModal,
    }));
  };

  const onCloseModal = () =>
    setModal((prevState) => ({
      ...prevState,
      show: false,
    }));

  const fetchPostData = useCallback(async () => {
    setIsLoading(true);
    await dispatch(setSelectedPostThunk(params.postId));
    await dispatch(setSelectedPostCommentsThunk(params.postId));
    setIsLoading(false);
  }, [params.postId]);

  useEffect(() => {
    fetchPostData();
  }, [fetchPostData]);

  return (
    <Modal isLoading={isLoading}>
      <PostContainer>
        <Image>
          <div className="image-container">
            <img src={selectedPost.image} alt="Post" />
          </div>
        </Image>
        <Details>
          <Flex>
            <ShortUserInfo
              userId={selectedPost.userID}
              width="32px"
              height="32px"
            />
            <Button
              type="moreOptions"
              color="dark"
              bgColor="transparent"
              size="default"
              onClick={handleModal}
            >
              <Icon icon="moreOptionsIcon" />
            </Button>
          </Flex>
          <MobileImage>
            <div className="image-container">
              <img src={selectedPost.image} alt="Post" />
            </div>
          </MobileImage>
          <Comments>
            <div className="description">
              <UserComment
                userId={selectedPost.userID}
                description={selectedPost.description}
                postTimestamp={selectedPost.timestamp}
                withAvatar
                withDate
              />
              {comments &&
                comments.map((comment) => (
                  <UserComment
                    key={comment.id}
                    userId={comment.authorID}
                    description={comment.content}
                    postTimestamp={comment.timestamp}
                    withAvatar
                    withDate
                  />
                ))}
            </div>
          </Comments>
          <ActionContainer>
            <PostActions
              currentUserId={currentUser.id}
              saved={currentUser.saved}
              postId={selectedPost.id}
              likes={selectedPost.likes}
            />
            <LikeInfo>
              {selectedPost.likes && selectedPost.likes.length} likes
            </LikeInfo>
            <Date date={selectedPost.timestamp} uppercase marginLeft />
            <AddComment postId={selectedPost.id} />
          </ActionContainer>
        </Details>
      </PostContainer>
      <MoreOptionsModal modal={modal} content onClose={onCloseModal} />
    </Modal>
  );
};

export default PostView;

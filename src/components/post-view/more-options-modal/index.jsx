/* eslint-disable react/no-array-index-key */
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  deleteUserPostThunk,
  setCurrentUserPostsThunk,
} from "store/thunks/post";

import { toast } from "react-toastify";

import {
  MoreOptionsModalWrapper,
  StyledMoreOptionsModal,
  OptionalList,
  Optional,
} from "./styles";

const MoreOptionsModal = ({ modal, onClose }) => {
  const params = useParams();

  const currentUser = useSelector((state) => state.user.currentUser);
  const selectedPost = useSelector((state) => state.post.selectedPost);

  const isUserPost = currentUser.posts.some((id) => id === params.postId);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied!");
  };

  const onDelete = async () => {
    try {
      await dispatch(deleteUserPostThunk(selectedPost.id, currentUser.id));
      await dispatch(setCurrentUserPostsThunk(currentUser.id));

      navigate(`/u/${currentUser.login}`);
      toast.success("Post deleted");
    } catch (error) {
      toast.error("Post not deleted");
    }
  };

  const onKeydown = (key) => {
    if (key.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  if (!modal.show) {
    return null;
  }

  return (
    <MoreOptionsModalWrapper onClick={onClose}>
      <StyledMoreOptionsModal onClick={(e) => e.stopPropagation()}>
        <OptionalList>
          <Optional
            onClick={() =>
              isUserPost
                ? onDelete()
                : toast.success("Report submitted successfully")
            }
          >
            {isUserPost ? "Delete" : "Report"}
          </Optional>
          <Optional onClick={onCopy}>Copy Link</Optional>
          <Optional onClick={onClose}>Cancel</Optional>
        </OptionalList>
      </StyledMoreOptionsModal>
    </MoreOptionsModalWrapper>
  );
};

export default MoreOptionsModal;

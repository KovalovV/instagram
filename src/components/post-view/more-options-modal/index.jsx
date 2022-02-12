/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { toast } from "react-toastify";

import { Icon } from "components/common/icons";
import Button from "components/common/button";

import UserSuggestions from "components/common/user-suggestions";

import ShortUserInfo from "components/common/short-user-info";

import { api } from "api";

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

  const onCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied!");
  };

  const onDelete = async () => {
    try {
      await api.post.deleteUserPost(selectedPost.id, currentUser.id);
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
                ? onDelete
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

/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSelectedPostCommentsThunk } from "store/thunks/post";

import Textarea from "components/common/textarea";

import { api } from "api";

import { TextareaContainer } from "./styles";

const AddComment = ({ postId }) => {
  const dispatch = useDispatch();

  const [commentText, setCommentText] = useState("");

  const { id: userId } = useSelector((state) => state.user.currentUser);

  const onChange = (e) => {
    setCommentText(e.target.value);
  };

  const onClick = async () => {
    if (commentText.length) {
      await api.post.setUserComment(postId, userId, commentText);
      dispatch(setSelectedPostCommentsThunk(postId));
      setCommentText("");
      return true;
    }
    return false;
  };

  return (
    <TextareaContainer>
      <Textarea
        id="comment"
        type="comment"
        size="full"
        border="none"
        bgColor="transparent"
        placeholder="Add a comment..."
        value={commentText}
        onChange={onChange}
        onClick={() => onClick(postId, userId, commentText)}
      />
    </TextareaContainer>
  );
};

export default AddComment;

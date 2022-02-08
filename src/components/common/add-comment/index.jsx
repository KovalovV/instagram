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

  const currentUser = useSelector((state) => state.user.currentUser);

  const onChange = (e) => {
    setCommentText(e.target.value);
  };

  const onClick = async () => {
    await api.post.addUserComment(postId, currentUser.id, commentText);
    dispatch(setSelectedPostCommentsThunk(postId));

    setCommentText("");
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
        onClick={() => onClick(postId, currentUser.id, commentText)}
      />
    </TextareaContainer>
  );
};

export default AddComment;

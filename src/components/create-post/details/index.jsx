/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setPostDescription } from "store/actions/posting";
import { setUserNewPostThunk } from "store/thunks/posting";

import Button from "components/common/button";
import Textarea from "components/common/textarea";

import {
  Flex,
  Header,
  FormContainer,
  Modal,
  PostImage,
  PostDetails,
  HeaderDetails,
} from "./styles";

const Details = () => {
  const descriptionLimit = 2200;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { login, avatar } = useSelector((state) => state.user.currentUser);
  const { image, description } = useSelector((state) => state.posting);
  const { id } = useSelector((state) => state.user.currentUser);

  const onChange = (e) => {
    if (e.target.value.length < descriptionLimit) {
      dispatch(setPostDescription(e.target.value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setUserNewPostThunk({ image, description }, id));
    navigate("/");
  };

  return (
    <Modal>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <Header>
            <div className="corner" />
            <h1>Create new post</h1>
            <div className="corner">
              <Button
                size="default"
                color="blue"
                bgColor="transparent"
                type="submit"
              >
                Share
              </Button>
            </div>
          </Header>
          <Flex>
            <PostImage>
              <img src={image} alt="Post" />
            </PostImage>
            <PostDetails>
              <HeaderDetails>
                <img src={avatar} alt="Post" />
                <h1>{login}</h1>
              </HeaderDetails>
              <label htmlFor="description">
                {description.length}/{descriptionLimit}
              </label>
              <Textarea
                id="description"
                type="description"
                size="full"
                border="none"
                bgColor="transparent"
                placeholder="Write a caption..."
                value={description}
                onChange={onChange}
              />
            </PostDetails>
          </Flex>
        </form>
      </FormContainer>
    </Modal>
  );
};

export default Details;

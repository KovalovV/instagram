import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setPostDescription } from "store/actions/posting";
import { setUserNewPostThunk } from "store/thunks/posting";

import Button from "components/common/button";
import Textarea from "components/common/textarea";

import ShortUserInfo from "components/common/short-user-info";

import { toast } from "react-toastify";

import {
  Flex,
  Header,
  FormContainer,
  Modal,
  PostImage,
  PostDetails,
} from "./styles";

const Details = () => {
  const descriptionLimit = 2200;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { image, description } = useSelector((state) => state.posting);
  const { id, login } = useSelector((state) => state.user.currentUser);

  // eslint-disable-next-line no-unused-vars
  const [postImage, setPostImage] = useState(image);

  const onChange = (e) => {
    if (e.target.value.length < descriptionLimit) {
      dispatch(setPostDescription(e.target.value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setUserNewPostThunk({ image, description }, id));
      toast.success("New post successfully created");
      navigate(`/u/${login}`);
    } catch (error) {
      toast.error("The photo is too large");
    }
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
              <img src={postImage} alt="Post" />
            </PostImage>
            <PostDetails>
              <ShortUserInfo userId={id} width="28px" height="28px" />
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

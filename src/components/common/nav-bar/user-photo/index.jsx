import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { signOutUserThunk } from "store/thunks/user";

import { Icon } from "components/common/icons";

import { toast } from "react-toastify";

import {
  Box,
  Diamond,
  StyledUserPhoto,
  UserActionsWrapper,
  UserActions,
  ActionWrapper,
} from "./styles";

const UserPhoto = () => {
  const dispatch = useDispatch();
  const { login, avatar } = useSelector((state) => state.user.currentUser);

  const navigate = useNavigate();
  const box = useRef(null);

  const onOpen = (e) => {
    if (e.target.id === "avatar") {
      box.current.style.display = "block";
    }
  };

  const onClose = () => {
    box.current.style.display = "none";
  };

  const handleLogOut = () => {
    try {
      dispatch(signOutUserThunk());
      toast.success("Log out success!");
      navigate("/sign-in");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <StyledUserPhoto onClick={onOpen}>
      <img
        src={
          avatar ||
          "https://firebasestorage.googleapis.com/v0/b/instagram-e4745.appspot.com/o/newUserAvatar.jpg?alt=media&token=0ef9aa7b-9350-4592-9178-d3d0e5e763a9"
        }
        alt="Avatar"
        id="avatar"
      />
      <Box ref={box}>
        <UserActionsWrapper id="search-wrapper" onClick={onClose} />
        <Diamond />
        <UserActions>
          <ActionWrapper>
            <Link to={`/u/${login}`}>
              <Icon icon="profileIcon" /> <span>Profile</span>
            </Link>
          </ActionWrapper>
          <ActionWrapper>
            <Link to="/accounts/edit/">
              <Icon icon="optionsIcon" width="16px" height="16px" />{" "}
              <span>Settings</span>
            </Link>
          </ActionWrapper>
          <ActionWrapper onClick={handleLogOut}>
            <span>Log Out</span>
          </ActionWrapper>
        </UserActions>
      </Box>
    </StyledUserPhoto>
  );
};

export default UserPhoto;

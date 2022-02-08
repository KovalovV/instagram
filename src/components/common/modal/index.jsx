import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Spinner from "components/common/spinner";

import { Icon } from "components/common/icons";

import { ModalWrapper } from "./styles";

const Modal = ({ isLoading, children }) => {
  const navigate = useNavigate();

  const selectedUserProfile = useSelector(
    (state) => state.selectedUser.selectedUserProfile
  );

  const currentUser = useSelector((state) => state.user.currentUser);

  const [isOpen, setIsOpen] = useState(true);

  const onClickClose = (e) => {
    if (e.target.id === "wrapper" || e.target.id === "close-icon") {
      setIsOpen(false);
      navigate(`/u/${selectedUserProfile.login || currentUser.login}`);
    }
    return false;
  };

  const onKeyDownClose = (key) => {
    if (key.keyCode === 27) {
      setIsOpen(false);
      navigate(`/u/${selectedUserProfile.login || currentUser.login}`);
    }
    return false;
  };

  return (
    isOpen && (
      <ModalWrapper
        onKeyDown={onKeyDownClose}
        onClick={onClickClose}
        tabIndex="-1"
        id="wrapper"
      >
        <Icon
          className="close"
          id="close-icon"
          icon="closeModalIcon"
          onClick={onClickClose}
        />
        {isLoading ? <Spinner width="100px" height="100px" /> : children}
      </ModalWrapper>
    )
  );
};

export default Modal;

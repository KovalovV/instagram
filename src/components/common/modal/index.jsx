import { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { SocketContext } from "context/call";

import { setShowCallModal } from "store/actions/call";

import Spinner from "components/common/spinner";
import { Icon } from "components/common/icons";

import { ModalWrapper } from "./styles";

const Modal = ({ isLoading, close = "default", children }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(true);

  const { stopAudio } = useContext(SocketContext);

  const onClickClose = (e) => {
    if (e.target.id === "wrapper" || e.target.id === "close-icon") {
      if (close === "default") {
        setIsOpen(false);
        navigate(0);
      }
      if (close === "call-modal") {
        stopAudio();
        dispatch(setShowCallModal(false));
      }
    }
    return false;
  };

  const onKeyDownClose = (key) => {
    if (key.keyCode === 27) {
      setIsOpen(false);
      if (close === "default") {
        navigate(0);
      }
      if (close === "call-modal") {
        stopAudio();
        dispatch(setShowCallModal(false));
      }
    }
    return false;
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDownClose);
    return () => document.removeEventListener("keydown", onKeyDownClose);
  });

  return (
    isOpen && (
      <ModalWrapper
        id="wrapper"
        tabIndex="-1"
        onClick={onClickClose}
        onKeyDown={onKeyDownClose}
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

/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Icon } from "components/common/icons";

import ImageCropper from "components/create-post/image-cropper";
import Details from "components/create-post/details";

import { ModalWrapper } from "./styles";

const Posting = () => {
  const params = useParams();
  const navigate = useNavigate();
  const modalWrap = useRef(null);

  const onClickClose = () => {
    modalWrap.current.style.display = "none";
    navigate("/home");
    return false;
  };

  const onKeyDownClose = (key) => {
    if (key.keyCode === 27) {
      modalWrap.current.style.display = "none";
      navigate("/home");
    }
    return false;
  };

  return (
    <ModalWrapper ref={modalWrap} onKeyDown={onKeyDownClose} tabIndex="0">
      <Icon className="close" icon="closeModalIcon" onClick={onClickClose} />
      {params.postingStep === "image" ? <ImageCropper /> : <Details />}
    </ModalWrapper>
  );
};

export default Posting;

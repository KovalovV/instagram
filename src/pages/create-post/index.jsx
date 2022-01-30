import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { setCurrentUserThunk } from "store/thunks/user";

import { Icon } from "components/common/icons";

import ImageCropper from "components/create-post/image-cropper";
import Details from "components/create-post/details";

import { ModalWrapper } from "./styles";

const Posting = () => {
  const params = useParams();
  const navigate = useNavigate();
  const modalWrap = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentUserThunk());
  }, [dispatch]);

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

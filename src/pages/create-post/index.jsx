import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { setCurrentUserThunk } from "store/thunks/user";

import { Icon } from "components/common/icons";

import ImageCropper from "components/create-post/image-cropper";
import Details from "components/create-post/details";

import { ModalWrapper } from "./styles";

// eslint-disable-next-line arrow-body-style
const Posting = () => {
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentUserThunk());
  }, [dispatch]);

  return (
    <ModalWrapper>
      <Icon className="close" icon="closeModalIcon" />
      {params.postingStep === "image" ? <ImageCropper /> : <Details />}
    </ModalWrapper>
  );
};

export default Posting;

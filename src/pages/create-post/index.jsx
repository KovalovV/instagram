import { useParams } from "react-router-dom";

import Modal from "components/common/modal";

import ImageCropper from "components/create-post/image-cropper";
import Details from "components/create-post/details";

const Posting = () => {
  const params = useParams();

  return (
    <Modal>
      {params.postingStep === "image" ? <ImageCropper /> : <Details />}
    </Modal>
  );
};

export default Posting;

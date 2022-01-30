import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setPostImage } from "store/actions/posting";

import "react-image-crop/dist/ReactCrop.css";
import ReactCrop from "react-image-crop";

import { toast } from "react-toastify";

import { Icon } from "components/common/icons";
import Button from "components/common/button";

import {
  Modal,
  Header,
  FormContainer,
  ImageContainer,
  SelectPhoto,
  Center,
} from "./styles";

const ImageCropper = () => {
  const [srcImg, setSrcImg] = useState(null);
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const [result, setResult] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleImage = (e) => {
    setSrcImg(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files[0]);
  };

  const getCroppedImg = () => {
    try {
      const canvas = document.createElement("canvas");
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );

      const base64Image = canvas.toDataURL("image/jpeg", 1);
      setResult(base64Image);

      dispatch(setPostImage(base64Image));

      console.log(result);
      return 1;
    } catch (error) {
      console.log("crop the image");
      return 0;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (getCroppedImg()) {
      navigate("/create/details");
    } else {
      toast.error("Crop the image");
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
                // onClick={onClick}
                size="default"
                color="blue"
                bgColor="transparent"
                type="submit"
              >
                Create
              </Button>
            </div>
          </Header>
          {!srcImg ? (
            <Center>
              <SelectPhoto>
                <Icon className="media" icon="mediaIcon" />
                <p>Select photo for post and crop</p>
                <label className="select" htmlFor="select-photo">
                  Select from computer
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="select-photo"
                  onChange={handleImage}
                />
              </SelectPhoto>
            </Center>
          ) : (
            <ImageContainer>
              {srcImg && (
                <ReactCrop
                  style={{
                    height: "100%",
                  }}
                  src={srcImg}
                  onImageLoaded={setImage}
                  crop={crop}
                  onChange={setCrop}
                />
              )}
            </ImageContainer>
          )}
        </form>
      </FormContainer>
    </Modal>
  );
};

export default ImageCropper;

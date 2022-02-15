import { useState, useCallback, useRef, useEffect } from "react";
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
  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const [crop, setCrop] = useState({ unit: "%", width: 100, aspect: 1 / 1 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const previewCanvasRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const generateDownload = (canvas) => {
    dispatch(setPostImage(canvas.toDataURL("image/jpeg", 0.15)));
  };

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    // eslint-disable-next-line no-shadow
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );
  }, [completedCrop]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      toast.error("Choose and crop the image");
    } else {
      generateDownload(previewCanvasRef.current, completedCrop);
      navigate("/create/details");
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
                Create
              </Button>
            </div>
          </Header>
          {!upImg ? (
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
                  onChange={onSelectFile}
                />
              </SelectPhoto>
            </Center>
          ) : (
            <ImageContainer>
              {upImg && (
                <ReactCrop
                  style={{
                    height: "100%",
                  }}
                  src={upImg}
                  onImageLoaded={onLoad}
                  crop={crop}
                  onChange={(c) => setCrop(c)}
                  onComplete={(c) => setCompletedCrop(c)}
                />
              )}
            </ImageContainer>
          )}
          <canvas
            ref={previewCanvasRef}
            style={{
              width: 0,
              height: 0,
            }}
          />
        </form>
      </FormContainer>
    </Modal>
  );
};

export default ImageCropper;

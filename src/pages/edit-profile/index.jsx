/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { api } from "api";

import { setUpdatedUserThunk } from "store/thunks/user";

import Spinner from "components/common/spinner";
import Input from "components/common/input";
import Button from "components/common/button";

import {
  Flex,
  MainContainer,
  EditForm,
  Image,
  PropLabel,
  InputDesc,
} from "./styles";

const EditProfile = () => {
  const dispatch = useDispatch();

  const {
    id: currentUserId,
    name: currentName,
    login: currentLogin,
    avatar: currentAvatar,
    website: currentWebsite,
    bio: currentBio,
    email: currentEmail,
  } = useSelector((state) => state.user.currentUser);

  const [isLoading, setIsLoading] = useState(false);

  const [newAvatar, setNewAvatar] = useState(currentAvatar);
  const [previewAvatar, setPreviewAvatar] = useState(currentAvatar);
  const [userProfileData, setUserProfileData] = useState({
    id: currentUserId,
    name: "",
    login: "",
    avatar: "",
    website: "",
    bio: "",
    email: "",
  });

  const inputFields = [
    {
      label: "Name",
      inputValue: userProfileData.name,
      inputDescription:
        "Help people discover your account by using the name you're known by: either your full name, nickname, or business name.",
    },
    {
      label: "Username",
      inputValue: userProfileData.login,
      inputDescription: `In most cases, you'll be able to change your username back to ${userProfileData.login} for another 14 days.`,
    },
    {
      label: "Website",
      inputValue: userProfileData.website,
      inputDescription: "",
    },
    {
      label: "Bio",
      inputValue: userProfileData.bio,
      inputDescription: "",
    },
    {
      label: "Email",
      inputValue: userProfileData.email,
      inputDescription:
        "Provide your personal information, even if the account is used for a business, a pet or something else. This won't be a part of your public profile.",
    },
  ];

  useEffect(() => {
    setUserProfileData({
      id: currentUserId,
      name: currentName,
      login: currentLogin,
      avatar: currentAvatar,
      website: currentWebsite,
      bio: currentBio,
      email: currentEmail,
    });
    setNewAvatar(currentAvatar);
  }, [
    currentUserId,
    currentBio,
    currentEmail,
    currentName,
    currentLogin,
    currentWebsite,
    currentAvatar,
  ]);

  const handleImage = async (e) => {
    const [photoObj] = e.target.files;

    setNewAvatar(photoObj);
    setPreviewAvatar(URL.createObjectURL(photoObj));
  };

  const onChangeEdit = (e) => {
    setUserProfileData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const getImageUrl = async () => {
    const imageUrls = await api.store.storeImage(currentUserId, newAvatar);
    setUserProfileData((prevState) => ({
      ...prevState,
      avatar: imageUrls,
    }));
    return imageUrls;
  };

  const onSubmitEdit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const imageURL =
      newAvatar === userProfileData.avatar
        ? userProfileData.avatar
        : await getImageUrl();

    await api.user.updateProfileInfo({
      ...userProfileData,
      avatar: imageURL,
    });

    dispatch(setUpdatedUserThunk(userProfileData.id));
    setIsLoading(false);
  };

  return (
    <MainContainer>
      <EditForm onSubmit={onSubmitEdit}>
        <Image>
          <img src={previewAvatar || userProfileData.avatar} alt="Avatar" />
          <div className="change-avatar">
            <h1>{currentLogin}</h1>
            <label htmlFor="change-avatar">Change Profile Photo</label>
            <input
              type="file"
              id="change-avatar"
              name="change-avatar"
              max="1"
              accept=".jpg,.png,.jpeg"
              onChange={handleImage}
            />
          </div>
        </Image>
        {inputFields.map(({ label, inputValue, inputDescription }) => (
          <Flex key={`${label}`}>
            <PropLabel htmlFor={`${label}`}>{label}</PropLabel>
            <InputDesc>
              <Input
                type="textEditProfile"
                border="dark"
                bgColor="transparent"
                id={label === "Username" ? "login" : label.toLowerCase()}
                placeholder={label}
                value={inputValue}
                disabled={label.toLowerCase() === "email"}
                onChange={onChangeEdit}
              />
              <p>{inputDescription}</p>
            </InputDesc>
          </Flex>
        ))}
        <Button
          size="small"
          color="white"
          bgColor="blue"
          type="submitEdit"
          disabled={isLoading}
        >
          {isLoading ? <Spinner width="20px" height="20px" /> : "Submit"}
        </Button>
      </EditForm>
    </MainContainer>
  );
};

export default EditProfile;

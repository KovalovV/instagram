/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "components/user-profile/profile-header";
import Content from "components/user-profile/content";

import { setCurrentUserThunk } from "store/thunks/user";

import { MainContainer, ProfileContainer } from "./styles";

const UserProfile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentUserThunk());
  }, [dispatch]);

  return (
    <MainContainer>
      <ProfileContainer>
        <Header />
        <Content />
      </ProfileContainer>
    </MainContainer>
  );
};

export default UserProfile;

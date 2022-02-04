import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Header from "components/user-profile/profile-header";
import Content from "components/user-profile/content";

import { setSelectedUserProfileThunk } from "store/thunks/selectedUser";

import { MainContainer, ProfileContainer } from "./styles";

const UserProfile = () => {
  const { id: currentUserId } = useSelector((state) => state.user.currentUser);
  const { id: selectedUserId } = useSelector(
    (state) => state.selectedUser.selectedUserProfile
  );

  const isAuthUserPage = currentUserId === selectedUserId;

  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedUserProfileThunk(params.userLogin));
  }, [dispatch, params.userLogin]);

  return (
    <MainContainer>
      <ProfileContainer>
        <Header isAuthUserPage={isAuthUserPage} />
        <Content isAuthUserPage={isAuthUserPage} />
      </ProfileContainer>
    </MainContainer>
  );
};

export default UserProfile;

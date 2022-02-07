import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Outlet } from "react-router-dom";

import Header from "components/user-profile/profile-header";
import Content from "components/user-profile/content";

import LoaderScreen from "components/common/loader-screen";

import { setSelectedUserProfileThunk } from "store/thunks/selectedUser";

import { MainContainer, ProfileContainer } from "./styles";

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { id: currentUserId } = useSelector((state) => state.user.currentUser);
  const { id: selectedUserId } = useSelector(
    (state) => state.selectedUser.selectedUserProfile
  );

  const isAuthUserPage = currentUserId === selectedUserId;

  const params = useParams();

  const dispatch = useDispatch();

  const fetchPostData = useCallback(async () => {
    setIsLoading(true);
    await dispatch(setSelectedUserProfileThunk(params.userLogin));
    setIsLoading(false);
  }, [params.userLogin]);

  useEffect(() => {
    fetchPostData();
  }, [fetchPostData]);

  if (isLoading) {
    return <LoaderScreen />;
  }

  return (
    <MainContainer>
      <ProfileContainer>
        <Outlet />
        <Header isAuthUserPage={isAuthUserPage} />
        <Content isAuthUserPage={isAuthUserPage} />
      </ProfileContainer>
    </MainContainer>
  );
};

export default UserProfile;

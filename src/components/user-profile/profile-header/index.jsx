/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { api } from "api";

import Button from "components/common/button";
import { Icon } from "components/common/icons";

import { setUpdatedUserThunk } from "store/thunks/user";
import { setSelectedUserProfileThunk } from "store/thunks/selectedUser";

import ProfileStats from "./profile-stats";

import FollowModal from "./follow-modal";
import FollowButton from "./follow-button";

import {
  Flex,
  ProfileHeader,
  ProfileMobileHeader,
  ProfileAvatar,
  ProfileDescription,
  ProfileLogin,
  ProfileAbout,
  ProfileMobileAbout,
} from "./styles";

const Header = ({ isAuthUserPage }) => {
  const [modal, setModal] = useState({
    show: false,
    modalType: "followers",
  });

  const {
    id: selectedId,
    login: selectedLogin,
    name: selectedName,
    bio: selectedBio,
    website: selectedWebsite,
    avatar: selectedAvatar,
    followers: selectedFollowers,
    following: selectedFollowing,
  } = useSelector((state) =>
    isAuthUserPage
      ? state.user.currentUser
      : state.selectedUser.selectedUserProfile
  );

  const { id: currentId, following: currentFollowings } = useSelector(
    (state) => state.user.currentUser
  );

  const dispatch = useDispatch();
  const params = useParams();

  const handleModal = (typeModal) => {
    setModal((prevState) => ({
      ...prevState,
      show: true,
      modalType: typeModal,
    }));
  };

  const onCloseModal = () =>
    setModal((prevState) => ({
      ...prevState,
      show: false,
    }));

  const isFollowing = (followingId) =>
    currentFollowings &&
    currentFollowings.some((following) => following === followingId);

  const handleFollow = async (followingId) => {
    if (isFollowing(followingId)) {
      await api.user.removeUserFollowing(currentId, followingId);
    } else {
      await api.user.addUserFollowing(currentId, followingId);
    }
    dispatch(setUpdatedUserThunk(currentId));
    dispatch(setSelectedUserProfileThunk(params.userLogin));
  };

  return (
    <>
      <ProfileHeader>
        <ProfileAvatar>
          <img src={selectedAvatar} alt="User Avatar" />
        </ProfileAvatar>
        <ProfileDescription>
          <Flex>
            <ProfileLogin>
              <h2>
                {selectedLogin}{" "}
                {selectedId === "u5WYU79Sgcggbic5hzrxAdzYHxC2" && (
                  <Icon icon="verifiedIcon" />
                )}
              </h2>
            </ProfileLogin>

            {isAuthUserPage ? (
              <>
                <Icon icon="optionsIcon" />
                <Link to="/accounts/edit">
                  <Button
                    type="editProfile"
                    size="small"
                    color="black"
                    bgColor="transparent"
                  >
                    Edit Profile
                  </Button>
                </Link>
              </>
            ) : (
              <FollowButton
                size="small"
                isFollowing={isFollowing(selectedId)}
                handleFollow={() => handleFollow(selectedId)}
              />
            )}
          </Flex>
          <ProfileStats
            isAuthUserPage={isAuthUserPage}
            type="desktop"
            handleModal={handleModal}
          />
          <ProfileAbout>
            <h1>{selectedName}</h1>
            <span>{selectedBio}</span>
            <a
              href={`http://${selectedWebsite}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {selectedWebsite}
            </a>
          </ProfileAbout>
        </ProfileDescription>
      </ProfileHeader>

      <ProfileMobileHeader>
        <ProfileAvatar>
          <img src={selectedAvatar} alt="User Avatar" />
        </ProfileAvatar>
        <ProfileDescription>
          <Flex>
            <ProfileLogin>
              <h2>
                {selectedLogin}{" "}
                {selectedId === "u5WYU79Sgcggbic5hzrxAdzYHxC2" && (
                  <Icon icon="verifiedIcon" />
                )}
              </h2>
            </ProfileLogin>
            {isAuthUserPage && <Icon icon="optionsIcon" />}
          </Flex>
          {isAuthUserPage ? (
            <Link to="/accounts/edit">
              <Button
                type="editProfile"
                size="large"
                color="black"
                bgColor="transparent"
              >
                Edit Profile
              </Button>
            </Link>
          ) : (
            <FollowButton
              size="large"
              isFollowing={isFollowing(selectedId)}
              handleFollow={() => handleFollow(selectedId)}
            />
          )}
        </ProfileDescription>
      </ProfileMobileHeader>
      <ProfileMobileAbout>
        <h1>{selectedName}</h1>
        <span>{selectedBio}</span>
        <a
          href={`http://${selectedWebsite}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          {selectedWebsite}
        </a>
      </ProfileMobileAbout>
      <ProfileStats
        isAuthUserPage={isAuthUserPage}
        type="mobile"
        handleModal={handleModal}
      />
      <FollowModal
        modal={modal}
        content={{ selectedFollowers, selectedFollowing }}
        onClose={onCloseModal}
        isFollowing={isFollowing}
        handleFollow={handleFollow}
      />
    </>
  );
};

export default Header;

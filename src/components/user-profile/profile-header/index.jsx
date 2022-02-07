/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { api } from "api";

import Button from "components/common/button";
import { Icon } from "components/common/icons";

import { setUpdatedUserThunk } from "store/thunks/user";
import { setSelectedUserProfileThunk } from "store/thunks/selectedUser";

import {
  Flex,
  ProfileHeader,
  ProfileMobileHeader,
  ProfileAvatar,
  ProfileDescription,
  ProfileLogin,
  ProfileStats,
  ProfileMobileStats,
  ProfileAbout,
  ProfileMobileAbout,
} from "./styles";

const Header = ({ isAuthUserPage }) => {
  const {
    id: selectedId,
    login: selectedLogin,
    name: selectedName,
    bio: selectedBio,
    website: selectedWebsite,
    avatar: selectedAvatar,
    followers: selectedFollowers,
    following: selectedFollowing,
    posts: selectedPosts,
  } = useSelector((state) =>
    isAuthUserPage
      ? state.user.currentUser
      : state.selectedUser.selectedUserProfile
  );

  const { id: currentId, following: currentFollowings } = useSelector(
    (state) => state.user.currentUser
  );

  const stats = [selectedPosts, selectedFollowers, selectedFollowing];
  const statsName = ["posts", "followers", "following"];

  const dispatch = useDispatch();
  const params = useParams();

  const isFollowing = () =>
    currentFollowings &&
    currentFollowings.some((following) => following === selectedId);

  const handleFollow = async () => {
    if (isFollowing()) {
      await api.user.removeUserFollowing(currentId, selectedId);
    } else {
      await api.user.setUserFollowing(currentId, selectedId);
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
              <h2>{selectedLogin}</h2>
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
              <Button
                type="followProfile"
                size="small"
                color={isFollowing() ? "grey" : "white"}
                bgColor={isFollowing() ? "white" : "blue"}
                border={isFollowing() ? "grey" : "none"}
                onClick={handleFollow}
              >
                {isFollowing() ? "Unfollow" : "Follow"}
              </Button>
            )}
          </Flex>
          <ProfileStats>
            {stats.map((stat, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`${stat}${index}`}>
                {stat && (
                  <>
                    <span>{stat.length} </span> {statsName[index]}
                  </>
                )}
              </li>
            ))}
          </ProfileStats>
          <ProfileAbout>
            <h1>{selectedName}</h1>
            <span>{selectedBio}</span>
            <a href={selectedWebsite}>{selectedWebsite}</a>
          </ProfileAbout>
        </ProfileDescription>
      </ProfileHeader>
      {/* mobile */}
      <ProfileMobileHeader>
        <ProfileAvatar>
          <img src={selectedAvatar} alt="User Avatar" />
        </ProfileAvatar>
        <ProfileDescription>
          <Flex>
            <ProfileLogin>
              <h2>{selectedLogin}</h2>
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
            <Button
              type="followProfile"
              size="small"
              color="white"
              bgColor="blue"
            >
              Follow
            </Button>
          )}
        </ProfileDescription>
      </ProfileMobileHeader>
      <ProfileMobileAbout>
        <h1>{selectedName}</h1>
        <span>{selectedBio}</span>
        <a href={selectedWebsite}>{selectedWebsite}</a>
      </ProfileMobileAbout>
      <ProfileMobileStats>
        {stats.map((stat, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${stat}${index}`}>
            {stat && (
              <>
                <span>{stat.length} </span> {statsName[index]}
              </>
            )}
          </li>
        ))}
      </ProfileMobileStats>
    </>
  );
};

export default Header;

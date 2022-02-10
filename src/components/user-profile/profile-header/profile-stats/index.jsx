/* eslint-disable react/no-array-index-key */
import { useSelector } from "react-redux";

import Button from "components/common/button";

import { StyledProfileStats, StyledProfileMobileStats } from "./styles";

const ProfileStats = ({ isAuthUserPage, type, handleModal }) => {
  const {
    followers: selectedFollowers,
    following: selectedFollowing,
    posts: selectedPosts,
  } = useSelector((state) =>
    isAuthUserPage
      ? state.user.currentUser
      : state.selectedUser.selectedUserProfile
  );

  const stats = [
    {
      name: "posts",
      value: selectedPosts,
    },
    {
      name: "followers",
      value: selectedFollowers,
    },
    {
      name: "following",
      value: selectedFollowing,
    },
  ];

  return type === "desktop" ? (
    <StyledProfileStats>
      {stats.map((item, index) => (
        <Button
          type="userStats"
          size="default"
          color="dark"
          bgColor="transparent"
          key={`${item.name}-${index}-${type}`}
          id={item.name}
          onClick={() => handleModal(item.name)}
        >
          {item.value && (
            <>
              <span>{item.value.length} </span> {item.name}
            </>
          )}
        </Button>
      ))}
    </StyledProfileStats>
  ) : (
    <StyledProfileMobileStats>
      {stats.map((item, index) => (
        <Button
          type="userStats"
          size="default"
          color="dark"
          bgColor="transparent"
          key={`${item.name}-${index}-${type}`}
          id={item.name}
          onClick={() => handleModal(item.name)}
        >
          {item.value && (
            <>
              <span>{item.value.length} </span> {item.name}
            </>
          )}
        </Button>
      ))}
    </StyledProfileMobileStats>
  );
};

export default ProfileStats;

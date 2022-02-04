/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "components/common/button";
import { Icon } from "components/common/icons";

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
  const { login, name, bio, website, avatar, followers, following, posts } =
    useSelector((state) =>
      isAuthUserPage
        ? state.user.currentUser
        : state.selectedUser.selectedUserProfile
    );

  const stats = [posts, followers, following];
  const statsName = ["posts", "followers", "following"];

  return (
    <>
      <ProfileHeader>
        <ProfileAvatar>
          <img src={avatar} alt="User Avatar" />
        </ProfileAvatar>
        <ProfileDescription>
          <Flex>
            <ProfileLogin>
              <h2>{login}</h2>
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
                color="white"
                bgColor="blue"
              >
                Follow
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
            <h1>{name}</h1>
            <span>{bio}</span>
            <a href={website}>{website}</a>
          </ProfileAbout>
        </ProfileDescription>
      </ProfileHeader>
      {/* mobile */}
      <ProfileMobileHeader>
        <ProfileAvatar>
          <img src={avatar} alt="User Avatar" />
        </ProfileAvatar>
        <ProfileDescription>
          <Flex>
            <ProfileLogin>
              <h2>{login}</h2>
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
        <h1>{name}</h1>
        <span>{bio}</span>
        <a href={website}>{website}</a>
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

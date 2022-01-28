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

const Header = () => {
  const { login, name, bio, website, avatar, followers, following, posts } =
    useSelector((state) => state.user.currentUser);

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
            <Icon icon="optionsIcon" />
            <Button
              type="editProfile"
              size="large"
              color="black"
              bgColor="transparent"
            >
              Edit Profile
            </Button>
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
            <Icon icon="optionsIcon" />
          </Flex>
          <Button
            type="editProfile"
            size="large"
            color="black"
            bgColor="transparent"
          >
            Edit Profile
          </Button>
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
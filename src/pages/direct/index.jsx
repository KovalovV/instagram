/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useSelector, useDispatch } from "react-redux";
import { Outlet, Link, useParams } from "react-router-dom";

import ShortUserInfo from "components/common/short-user-info";

import { Icon } from "components/common/icons";

import {
  Flex,
  MainContainer,
  UserList,
  Left,
  Right,
  HeaderList,
  Center,
} from "./styles";

const Direct = () => {
  const params = useParams();

  const {
    id: currentId,
    login: currentLogin,
    following: currentFollowing,
  } = useSelector((state) => state.user.currentUser);

  return (
    <MainContainer>
      <Flex>
        <Left>
          <HeaderList>
            <h2>{currentLogin}</h2>
          </HeaderList>
          <UserList>
            {currentFollowing.map((following) => (
              <Link key={following} to={`/direct/t/${following}-${currentId}`}>
                <ShortUserInfo
                  userId={following}
                  width="56px"
                  height="56px"
                  withName
                />
              </Link>
            ))}
          </UserList>
        </Left>
        <Right>
          {params.chatId ? (
            <Outlet />
          ) : (
            <Center>
              <Icon className="media" icon="messengerIcon" />
              <h3>Your messages</h3>
              <p>Send private photos and messages to a friend or group.</p>
            </Center>
          )}
        </Right>
      </Flex>
    </MainContainer>
  );
};

export default Direct;

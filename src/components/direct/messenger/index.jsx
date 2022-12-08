import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import ShortUserInfo from "components/common/short-user-info";
import Button from "components/common/button";
import { Icon } from "components/common/icons";

import { MessengerContainer, HeaderMessenger, Flex } from "./styles";

const Messenger = () => {
  const params = useParams();

  const { id } = useSelector((state) => state.user.currentUser);

  return (
    <MessengerContainer>
      <HeaderMessenger>
        <Flex>
          <ShortUserInfo
            userId={params.chatId.split("-")[0]}
            width="30px"
            height="30px"
            link="name"
          />
          <Link to="/call" target="_blank" rel="noopener noreferrer">
            <Button
              type="moreOptionsStyles"
              color="dark"
              bgColor="transparent"
              size="default"
            >
              <Icon icon="callIcon" />
            </Button>
          </Link>
        </Flex>
      </HeaderMessenger>
    </MessengerContainer>
  );
};
export default Messenger;

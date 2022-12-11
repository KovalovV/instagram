import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { setShowCallModal } from "store/actions/call";

import { setOutcomeUserThunk } from "store/thunks/call";

import ShortUserInfo from "components/common/short-user-info";
import Button from "components/common/button";
import { Icon } from "components/common/icons";

import { MessengerContainer, HeaderMessenger, Flex } from "./styles";

const Messenger = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const userId = useMemo(() => params.chatId.split("-")[0], [params]);

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
          <Button
            type="moreOptionsStyles"
            color="dark"
            bgColor="transparent"
            size="default"
            onClick={() => {
              dispatch(setOutcomeUserThunk(userId));
              dispatch(setShowCallModal(true));
            }}
          >
            <Icon icon="callIcon" />
          </Button>
        </Flex>
      </HeaderMessenger>
    </MessengerContainer>
  );
};
export default Messenger;

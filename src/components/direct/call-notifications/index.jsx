import React, { useContext } from "react";
import { useSelector } from "react-redux";

import { SocketContext } from "context/call";

import { Icon } from "components/common/icons";

import { CallNotificationsContainer, Action } from "./styles";

const CallNotifications = () => {
  const { login } = useSelector((state) => state.user.currentUser);

  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return call.isReceivingCall && !callAccepted ? (
    <CallNotificationsContainer>
      <h2>{login} is calling:</h2>
      <Action onClick={answerCall}>
        <Icon icon="handsetAnswerIcon" />
      </Action>
    </CallNotificationsContainer>
  ) : (
    <span />
  );
};

export default CallNotifications;

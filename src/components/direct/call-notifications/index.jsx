import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";

import { SocketContext } from "context/call";

import { setShowCallModal } from "store/actions/call";

import useAudio from "hooks/useAudio";

import { Icon } from "components/common/icons";

import incomeCall from "assets/audio/incomeCall.mp3";

import { CallNotificationsContainer, Action } from "./styles";

const CallNotifications = () => {
  const [_, playAudio, stopAudio] = useAudio(incomeCall);

  const dispatch = useDispatch();

  const { answerCall, call, callAccepted } = useContext(SocketContext);

  useEffect(
    () => (call.isReceivingCall && !callAccepted ? playAudio() : stopAudio()),
    [call.isReceivingCall, callAccepted]
  );

  return call.isReceivingCall && !callAccepted ? (
    <CallNotificationsContainer>
      <h2>{call.name} is calling:</h2>
      <Action
        onClick={() => {
          dispatch(setShowCallModal(true));
          answerCall();
        }}
      >
        <Icon icon="handsetAnswerIcon" />
      </Action>
    </CallNotificationsContainer>
  ) : (
    <span />
  );
};

export default CallNotifications;

/* eslint-disable jsx-a11y/media-has-caption */
import React, { useContext } from "react";

import { SocketContext } from "context/call";

import { Icon } from "components/common/icons";

import { Actions, Action } from "./styles";

const CallActions = () => {
  const {
    callAccepted,
    callEnded,
    withAudioData,
    setWithAudioData,
    withVideoData,
    setWithVideoData,
    leaveCall,
  } = useContext(SocketContext);

  return (
    <Actions>
      <Action>
        <Icon
          onClick={() =>
            setWithVideoData((prevWithVideoData) => !prevWithVideoData)
          }
          icon={withVideoData ? "videoCameraIcon" : "muteVideoCameraIcon"}
        />
      </Action>
      <Action>
        <Icon
          onClick={() =>
            setWithAudioData((prevWithAudioData) => !prevWithAudioData)
          }
          icon={withAudioData ? "microphoneIcon" : "muteMicrophoneIcon"}
        />
      </Action>
      {callAccepted && !callEnded && (
        <Action>
          <Icon onClick={leaveCall} icon="handsetIcon" />
        </Action>
      )}
    </Actions>
  );
};

export default CallActions;

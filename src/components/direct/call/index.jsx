/* eslint-disable jsx-a11y/media-has-caption */
import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { SocketContext } from "context/call";

import { Icon } from "components/common/icons";
import Modal from "components/common/modal";
import CallInfo from "components/direct/call-info";
import CallActions from "components/direct/call-actions";

import {
  CallContainer,
  Center,
  MuteCamera,
  UserVideo,
  Card,
  Video,
} from "./styles";

const Call = () => {
  const [isLoading, setIsLoading] = useState(false);

  const showCallModal = useSelector((state) => state.call.showCallModal);

  const {
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    setStream,
    withAudioData,
    withVideoData,
  } = useContext(SocketContext);

  useEffect(async () => {
    navigator.mediaDevices
      .getUserMedia({ video: withVideoData, audio: withAudioData })
      .then((currentStream) => {
        setStream(currentStream);

        if (myVideo.current) {
          myVideo.current.srcObject = currentStream;
        }
      });
  }, [withVideoData, withAudioData, myVideo, showCallModal]);

  if (!showCallModal) {
    return <span />;
  }

  return (
    <Modal isLoading={isLoading} close="call-modal">
      <Center>
        <CallContainer>
          <Card>
            <UserVideo>
              <Video playsInline muted ref={myVideo} autoPlay />
              {!withVideoData && (
                <Center>
                  <MuteCamera>
                    <Icon icon="muteVideoCameraIcon" />

                    <h4>Camera off</h4>
                  </MuteCamera>
                </Center>
              )}
              <CallActions />
            </UserVideo>
          </Card>
          {callAccepted && !callEnded ? (
            <Card>
              <Video playsInline ref={userVideo} autoPlay />
            </Card>
          ) : (
            <CallInfo />
          )}
        </CallContainer>
      </Center>
    </Modal>
  );
};
export default Call;

/* eslint-disable jsx-a11y/media-has-caption */
import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { SocketContext } from "context/call";

import Input from "components/common/input";

import {
  Center,
  CallButton,
  CallInfoCointainer,
  Card,
  OutcomeUserInfo,
} from "./styles";

const CallInfo = () => {
  const [idToCall, setIdToCall] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { callUser, me } = useContext(SocketContext);

  const { outcomeUser } = useSelector((state) => state.call);

  return (
    <Card>
      {outcomeUser ? (
        <Center>
          <CallInfoCointainer>
            <OutcomeUserInfo>
              <img src={outcomeUser.avatar} alt="Avatar" />
              <h3>{outcomeUser.login}</h3>
              <p>Ready to call?</p>
            </OutcomeUserInfo>
            <CallButton
              type="bold"
              size="default"
              color="white"
              bgColor="blue"
              onClick={() => {
                // handlePlaying();
                // outcomeCall.play();
                // outcomeCall.loop = true;
                // playAudio(outcomeCallInstance);
                setIsLoading(true);
                callUser(outcomeUser.peerId);
              }}
              disabled={!outcomeUser.peerId || isLoading}
            >
              Start Call
            </CallButton>
          </CallInfoCointainer>
        </Center>
      ) : (
        <Center>
          <CallInfoCointainer>
            <CopyToClipboard text={me}>
              <CallButton
                type="bold"
                size="default"
                color="white"
                bgColor="blue"
              >
                Copy Your ID
              </CallButton>
            </CopyToClipboard>
            <Input
              type="roundingText"
              border="none"
              bgColor="mostDarkGrey"
              id="search"
              placeholder="ID to call"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
            />
            <CallButton
              type="bold"
              size="default"
              color="white"
              bgColor="blue"
              onClick={() => callUser(idToCall)}
              disabled={!idToCall}
            >
              Start Call
            </CallButton>
          </CallInfoCointainer>
        </Center>
      )}
    </Card>
  );
};

export default CallInfo;

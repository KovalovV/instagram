/* eslint-disable jsx-a11y/media-has-caption */
import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Grid, Paper, makeStyles } from "@material-ui/core";

import { SocketContext } from "context/call";

import { Icon } from "components/common/icons";
import Input from "components/common/input";

import {
  CallContainer,
  Actions,
  Center,
  Background,
  Action,
  MuteCamera,
  UserVideo,
  CallButton,
  CallInfo,
} from "./styles";

const useStyles = makeStyles((theme) => ({
  video: {
    height: "360px",
  },
  paper: {
    minHeight: "360px",
    borderRadius: "8px",
    backgroundColor: "#1f1f1f",
    overflow: "hidden",
  },

  root: {
    display: "flex",
    flexDirection: "column",
  },
  gridContainer: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}));

const Call = () => {
  const [idToCall, setIdToCall] = useState("");

  const {
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    withAudioData,
    setWithAudioData,
    withVideoData,
    setWithVideoData,
    leaveCall,
    callUser,
    me,
  } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <Background>
      <Center>
        <CallContainer>
          <Paper className={classes.paper}>
            <Grid item>
              {stream && (
                <UserVideo>
                  <video
                    playsInline
                    muted
                    ref={myVideo}
                    autoPlay
                    className={classes.video}
                  />
                  {!withVideoData && (
                    <Center>
                      <MuteCamera>
                        <Icon icon="muteVideoCameraIcon" />

                        <h4>Camera off</h4>
                      </MuteCamera>
                    </Center>
                  )}
                </UserVideo>
              )}

              <Actions>
                <Action>
                  <Icon
                    onClick={() =>
                      setWithVideoData(
                        (prevWithVideoData) => !prevWithVideoData
                      )
                    }
                    icon={
                      withVideoData ? "videoCameraIcon" : "muteVideoCameraIcon"
                    }
                  />
                </Action>
                <Action>
                  <Icon
                    onClick={() =>
                      setWithAudioData(
                        (prevWithAudioData) => !prevWithAudioData
                      )
                    }
                    icon={
                      withAudioData ? "microphoneIcon" : "muteMicrophoneIcon"
                    }
                  />
                </Action>
                {callAccepted && !callEnded && (
                  <Action>
                    <Icon onClick={leaveCall} icon="handsetIcon" />
                  </Action>
                )}
              </Actions>
            </Grid>
          </Paper>
          {callAccepted && !callEnded && (
            <Paper className={classes.paper}>
              <Grid item>
                <video
                  playsInline
                  ref={userVideo}
                  autoPlay
                  className={classes.video}
                />
              </Grid>
            </Paper>
          )}

          <Paper className={classes.paper}>
            <Center>
              <CallInfo>
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
              </CallInfo>
            </Center>
          </Paper>
        </CallContainer>
      </Center>
    </Background>
  );
};
export default Call;

import React, {
  createContext,
  useState,
  useRef,
  useEffect,
  useMemo,
} from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";

import { useSelector, useDispatch } from "react-redux";

import { api } from "api";

import { setUpdatedUserThunk } from "store/thunks/user";

import useAudio from "hooks/useAudio";

import outcomeCall from "assets/audio/outcomeCall.mp3";

const SocketContext = createContext();

// const socket = io('http://localhost:5000');
const socket = io("https://webrtc-video-server.herokuapp.com");

const SocketContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState("");
  const [call, setCall] = useState({});
  const [me, setMe] = useState("");

  const [withVideoData, setWithVideoData] = useState(true);
  const [withAudioData, setWithAudioData] = useState(true);

  const [_, playAudio, stopAudio] = useAudio(outcomeCall);

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  const dispatch = useDispatch();

  const { id: currentUserId, login: currentLogin } = useSelector(
    (state) => state.user.currentUser
  );

  const handleUpdatePeerId = async (peerId) => {
    await api.user.updateSocketId({
      userId: currentUserId,
      peerId,
    });

    dispatch(setUpdatedUserThunk(currentUserId));
  };

  useEffect(() => {
    socket.on("me", (id) => {
      setMe(id);
    });

    socket.on("callUser", ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
  }, []);

  useEffect(async () => {
    if (currentUserId) {
      setName(currentLogin);
      await handleUpdatePeerId(me);
    }
  }, [me, currentUserId]);

  useEffect(
    () => async () => {
      await handleUpdatePeerId(null);
      socket.off("me");
      socket.off("callUser");
    },
    []
  );

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: call.from });
    });

    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id) => {
    playAudio();
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name,
      });
    });

    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      stopAudio();

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    window.location.reload();
  };

  return (
    <SocketContext.Provider
      value={useMemo(() => ({
        call,
        callAccepted,
        myVideo,
        userVideo,
        stream,
        setStream,
        name,
        setName,
        callEnded,
        me,
        callUser,
        leaveCall,
        answerCall,
        withVideoData,
        setWithVideoData,
        withAudioData,
        setWithAudioData,
        playAudio,
        stopAudio,
      }))}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContextProvider, SocketContext, socket };

/* eslint-disable no-unused-expressions */
import { useState, useEffect } from "react";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const playAudio = () => setPlaying(true);

  const stopAudio = () => setPlaying(false);

  audio.loop = true;

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));

    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, playAudio, stopAudio];
};

export default useAudio;

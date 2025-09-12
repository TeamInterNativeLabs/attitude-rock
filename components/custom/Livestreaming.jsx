// components/LiveStreamPlayer.jsx

import { useEffect, useRef, useState } from "react";

export default function LiveStreamPlayer({ isPlaying }) {
  const [streamUrl, setStreamUrl] = useState("");
  const audioRef = useRef(null);

  useEffect(() => {
    setStreamUrl("https://cast4.my-control-panel.com/proxy/attitude/stream");
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((err) => {
        console.error("Playback failed:", err);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  if (!streamUrl) {
    return <div>Loading audio stream...</div>;
  }

  return (
    <div>
      <audio ref={audioRef} src={streamUrl} style={{ width: "100%" }} controls>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

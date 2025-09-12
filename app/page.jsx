import React from "react";
import Hero from "@/components/custom/Hero";
import Player from "@/components/custom/Player";
import Home from "@/components/custom/Home";
import AnimatedAudioPlayer from "@/components/custom/AudioPlayer";
import LiveStreamingPlayer from "@/components/custom/LiveStreamingPlayer";

export default function page() {
  return (
    <div>
      <Home />
      <Hero />
      {/* <AnimatedAudioPlayer
        src={"./song.mp3"}
        artist={"Logan Paul"}
        cover={"./test.jpg"}
        title={"Do you wanna be."}
      /> */}
      <LiveStreamingPlayer />
    </div>
  );
}

"use client"; // For Next.js App Router

import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./custom-player.css"; // Optional: for custom styling

const AnimatedAudioPlayer = ({ src, cover, title, artist }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef();
  const spinControls = useAnimation();

  // Handle play/pause animations
  useEffect(() => {
    if (isPlaying) {
      spinControls.start({
        rotate: 360,
        transition: {
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        },
      });
    } else {
      spinControls.stop();
    }
  }, [isPlaying, spinControls]);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url("/live-bg.jpg")` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-90 z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex justify-center items-center w-full h-full">
        <motion.div
          className="max-w-md w-full mx-auto bg-gray-900 text-white rounded-xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Album Cover */}
          <div className="relative w-full h-64 bg-black">
            <motion.img
              src={cover}
              alt={title}
              className="w-full h-full object-cover"
              animate={spinControls}
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="text-sm opacity-80">{artist}</p>
            </div>
          </div>

          {/* Audio Player */}
          <AudioPlayer
            ref={playerRef}
            src={src}
            layout="horizontal"
            showJumpControls={false}
            customVolumeControls={[]}
            autoPlayAfterSrcChange={false}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="rounded-b-xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedAudioPlayer;

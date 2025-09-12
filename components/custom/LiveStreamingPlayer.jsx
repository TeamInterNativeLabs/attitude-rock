"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaStop } from "react-icons/fa";
import LiveStreamPlayer from "./Livestreaming";

const LiveStreamingPlayer = () => {
  const bars = Array.from({ length: 50 });
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="w-full h-screen relative flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('/live-bg.jpg')` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-90 z-0" />

      {/* Main Content */}
      <div className="z-30 flex flex-col items-center">
        {/* Album Info */}
        <div className="mb-32 text-center">
          <img
            src="/logo-no-bg.png"
            alt="Album Art"
            className="w-28 h-28 object-cover mx-auto mb-4 rounded-full border-4 border-cyan-400"
          />
          <h1 className="text-2xl font-bold text-cyan-300">LIVE STREAM</h1>
          <p className="text-sm text-gray-400">Rock with an Attitude</p>
        </div>

        {/* Equalizer Bars */}
        <div className="flex items-end justify-center w-full h-32 gap-[6px] px-4 mb-10">
          {bars.map((_, i) =>
            isPlaying ? (
              <motion.div
                key={i}
                className="w-2 h-full rounded-sm origin-bottom"
                style={{
                  background:
                    "linear-gradient(180deg, #00f0ff 0%, #ff00c8 100%)",
                }}
                initial={{ scaleY: 1 }}
                animate={{
                  scaleY: [1, 2, 0.6 + Math.random(), 1.4, 1],
                }}
                transition={{
                  duration: 1 + Math.random() * 0.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: i * 0.05,
                }}
              />
            ) : (
              <div
                key={i}
                className="w-2 h-full rounded-sm origin-bottom bg-gray-700"
              />
            )
          )}
        </div>
        <LiveStreamPlayer isPlaying={isPlaying} />

        {/* Play/Stop Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setIsPlaying((prev) => !prev)}
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold shadow-md transition-all duration-300 
            ${
              isPlaying
                ? "bg-gradient-to-r from-red-600 to-red-800 hover:brightness-110 text-white"
                : "bg-gradient-to-r from-green-500 to-emerald-600 hover:brightness-110 text-white"
            }
          `}
        >
          {isPlaying ? (
            <>
              <FaStop /> Stop
            </>
          ) : (
            <>
              <FaPlay /> Play
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default LiveStreamingPlayer;

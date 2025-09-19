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
      className="w-full min-h-screen relative flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('/live-bg.jpg')` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-90 z-0" />

      {/* Main Content */}
      <div className="z-30 flex flex-col items-center px-4">
        {/* Album Info */}
        <div className="mb-16 sm:mb-24 md:mb-32 text-center">
          <img
            src="/logo-no-bg.png"
            alt="Album Art"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover mx-auto mb-4 rounded-full border-2 sm:border-4 border-cyan-400"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-300">
            LIVE STREAM
          </h1>
          <p className="text-xs sm:text-sm text-gray-400">
            Rock with an Attitude
          </p>
        </div>

        {/* Equalizer Bars */}
        <div className="flex items-end justify-center w-full h-20 sm:h-28 md:h-32 gap-[3px] sm:gap-[5px] md:gap-[6px] px-2 sm:px-4 mb-6 sm:mb-10">
          {bars.map((_, i) =>
            isPlaying ? (
              <motion.div
                key={i}
                className="w-[2px] sm:w-1.5 md:w-2 h-full rounded-sm origin-bottom"
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
                className="w-[2px] sm:w-1.5 md:w-2 h-full rounded-sm origin-bottom bg-gray-700"
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
          className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold shadow-md transition-all duration-300 
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

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed z-[10000] pointer-events-none flex items-center justify-center"
      style={{
        top: 0,
        left: 0,
        transform: `translate(${position.x - 15}px, ${position.y - 15}px)`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src="/cd-cursor.png"
        alt="Custom Cursor"
        className="w-10 h-10"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.9, 1, 0.9],
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          },
          scale: {
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          },
          opacity: {
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
    </motion.div>
  );
}

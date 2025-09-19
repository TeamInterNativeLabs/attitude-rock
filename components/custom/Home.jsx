"use client";

import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const rock = "ROCK".split("");
  const _with = "WITH".split("");
  const _an = "AN".split("");
  const attitude = "ATTITUDE".split("");

  const baseStyle = {
    fontFamily: "Superion, 'Ruthless Regular', sans-serif",
    fontSize: "3rem",
    WebkitTextStroke: "1px black",
  };

  const animateLetter = (letter, i, style = "stroke") => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: i * 0.05 }}
      key={`${letter}-${i}`}
      className={style}
    >
      {letter}
    </motion.div>
  );

  return (
    <section
      className="z-10 flex w-full h-screen bg-cover bg-center transition fadeIn"
      style={{ backgroundImage: `url("/test.jpg")` }}
    >
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-black/80 space-y-8">
        <motion.img
          src="/logo-no-bg.png"
          alt="Brand Logo"
          className="w-32 sm:w-44 md:w-56 lg:w-72 object-contain"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <div className="flex flex-wrap justify-center text-center leading-none">
          {rock.map((el, i) => animateLetter(el, i))}
          &nbsp; &nbsp; &nbsp;
          {_with.map((el, i) =>
            animateLetter(el, i + rock.length, "stroke-red")
          )}
          &nbsp; &nbsp; &nbsp;
          {_an.map((el, i) =>
            animateLetter(el, i + rock.length + _with.length)
          )}
          &nbsp; &nbsp; &nbsp;
          {attitude.map((el, i) =>
            animateLetter(
              el,
              i + rock.length + _with.length + _an.length,
              "stroke-red"
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;

"use client";
import React, { useState, useEffect, useCallback } from "react";

const images = [
  "/AR Sketch.png",
  "/AR Spell.png",
  "/AR Studio B.png",
  "/AR Surfing.png",
  "/AR Trump.png",
  "/AR U Wanna Be.png",
  "/AR Airlines.png",
  "/AR Album.png",
  "/AR Aphrodisiac.png",
  "/AR Article.png",
  "/AR Baloon.png",
  "/AR Be Naughty.png",
  "/AR Breaking News.png",
  "/AR Calendar.png",
  "/AR Capt Jack Work2.png",
  "/AR Capt Jack.png",
  "/AR Card.png",
  "/AR Chocolate Dip.png",
  "/AR Crypto.png",
  "/AR EVH Guitars.png",
  "/AR Exex Order.png",
  "/AR Find Out.png",
  "/AR Graffiti 2.png",
  "/AR Graffiti.png",
  "/AR Headphones.png",
  "/AR Hotel.png",
  "/AR Is Here.png",
  "/AR Jack is Back.png",
  "/AR Jack on Building.png",
  "/AR Jack.png",
  "/AR Kills Al Capone.png",
  "/AR Logo 99.png",
  "/AR Memoro Dress.png",
  "/AR Memoro Duran.png",
  "/AR Memoro Guitar.png",
  "/AR Memoro Shoes.png",
  "/AR Memoro SR Guitar.png",
  "/AR Morning Cup.png",
  "/AR Museum.png",
  "/AR New York.png",
  "/AR Newspaper.png",
  "/AR On the Air.png",
  "/AR Page 2.png",
  "/AR Pops.png",
  "/AR Presidential.png",
  "/AR Rocky.png",
  // "/logo.jpg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const showSlide = useCallback((index) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 300);
  }, []);

  const next = useCallback(
    () => showSlide((current + 1) % images.length),
    [current, showSlide]
  );

  const prev = useCallback(
    () => showSlide((current - 1 + images.length) % images.length),
    [current, showSlide]
  );

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [next]);

  useEffect(() => {
    const handleKeys = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, [next, prev]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className={`transition-all duration-700 ease-in-out  transform ${
          fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>

      <button
        onClick={prev}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition focus:outline-none focus:ring-2 focus:ring-white"
      >
        &#10094;
      </button>

      <button
        onClick={next}
        aria-label="Next Slide"
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition focus:outline-none focus:ring-2 focus:ring-white"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Hero;

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowVideo(false);
    }, 10000); // Delay to show video after 1 second
  }, []);
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Fallback background image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center "
        style={{ backgroundImage: `url('/bg-fallback.jpg')` }}
        onLoad={() => setShowVideo(true)} // Show video when image loads
      />
      {/* Bilden visas automatiskt under videon om den inte laddar */}
      {/* Video Background (overlays image if loaded) */}

      <AnimatePresence>
        {showVideo ? (
          <motion.video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <source src="/bg-video.mp4" type="video/mp4" />
          </motion.video>
        ) : null}
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* <div
        className={clsx(
          " absolute inset-0  bg-opacity-60 z-10 bg-gradient-to-b from-transparent",
          {
            "to-white": theme !== "dark",
            "to-black": theme === "dark",
          }
        )}
      /> */}
      {/* Text content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
          Your Business Deserves to Be Seen
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
          Is your business ready for the next step? I build professional
          websites, set up email and help you with SEO – all to help you grow
          digitally.
        </p>
        <a
          href="#contact"
          className="mt-10 bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-3 px-6 rounded-2xl shadow-lg"
        >
          Book Free Consultation
        </a>
      </div>
    </section>
  );
}

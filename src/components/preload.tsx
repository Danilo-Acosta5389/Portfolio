"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useThemeContext } from "@/context/theme-context";

import React from "react";
import clsx from "clsx";

export default function Preload() {
  const { theme } = useThemeContext();
  const [showIntro, setShowIntro] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [visibleLetters, setVisibleLetters] = useState<string[]>([]);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

    if (!hasSeenIntro) {
      sessionStorage.setItem("hasSeenIntro", "true");

      setIsVisible(true);
      setShowIntro(true);

      setTimeout(() => setShowIntro(false), 3000);
      setTimeout(() => setIsVisible(false), 5000);
    }
  }, []);

  useEffect(() => {
    const letters = [
      "",
      "D",
      "a",
      "n",
      "i",
      "l",
      "o",
      "A",
      "c",
      "o",
      "s",
      "t",
      "a",
      ".",
      "d",
      "e",
      "v",
    ];
    let currentIndex = 0;

    const typeLetter = () => {
      if (currentIndex >= letters.length + 1) return;

      setVisibleLetters((prev) => [...prev, letters[currentIndex]]);
      currentIndex++;

      // Schedule next letter
      setTimeout(typeLetter, 100); // Adjust timing as needed
    };

    // Start typing animation
    typeLetter();

    // Cleanup
    return () => {
      currentIndex = letters.length; // Stop any pending timeouts
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          transition={{ duration: 2 }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={clsx(
            `${theme} pointer-events-none bg-background text-foreground w-full h-full absolute z-50 top-0 bottom-0 flex flex-col justify-center items-center`,
            {
              hidden: !isVisible,
            }
          )}
        >
          <AnimatePresence>
            {showIntro && (
              <motion.div
                transition={{ duration: 2 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-2xl flex flex-row justify-center items-center"
              >
                {visibleLetters.map((letter, i) => (
                  <motion.div
                    transition={{ duration: 0.2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    key={i}
                    className="text-2xl"
                  >
                    {letter}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

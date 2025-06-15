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
  const text = "DaniloAcosta.dev";

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

    if (!hasSeenIntro) {
      setIsVisible(true);
      setShowIntro(true);
      document.body.classList.add("overflow-hidden");
      setTimeout(() => setShowIntro(false), 2000);
      setTimeout(() => {
        sessionStorage.setItem("hasSeenIntro", "true");
        setIsVisible(false);
        document.body.classList.remove("overflow-hidden");
      }, 3000);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          transition={{ duration: 1 }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={clsx(
            `${theme} pointer-events-none bg-background text-foreground w-screen h-screen fixed z-50 top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center`,
            {
              hidden: !isVisible,
            }
          )}
        >
          <div>
            <AnimatePresence>
              {showIntro && (
                <motion.div
                  transition={{ duration: 1 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className=" text-2xl"
                >
                  {text.split("").map((letter, i) => (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.1, delay: i * 0.1 }}
                      key={i}
                      className=""
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { useThemeContext } from "@/context/theme-context";
import { Image } from "@heroui/react";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import TypingEffect from "./typing-effect";

export default function Hero() {
  const { theme } = useThemeContext();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    console.log("Found hasSeenIntro?", hasSeenIntro);
    if (!hasSeenIntro) {
      setTimeout(() => setIsVisible(true), 3000);
    } else {
      setIsVisible(true);
    }
  }, []);

  return (
    <>
      {isVisible ? (
        <section
          id="top"
          className={`${theme} bg-background text-foreground w-full h-full flex flex-col justify-center items-center`}
        >
          <div className=" max-w-5xl w-full h-screen flex flex-col justify-between items-center">
            <div>
              <span className=" sr-only">place holder</span>
            </div>
            <div className=" flex sm:flex-row flex-col sm:space-x-10 px-5 sm:pb-0">
              <motion.div
                transition={{ duration: 1 }}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ x: -40, opacity: 1 }}
                viewport={{ once: true }}
                className=" flex justify-center items-center"
              >
                <Image
                  isBlurred
                  radius="full"
                  alt="AI image of Danilo"
                  className="m-10"
                  src="/me-cyberpunk.jpg"
                  width={240}
                />
              </motion.div>
              <div className=" space-y-1 sm:mt-20 sd:ml-24 flex flex-col text-xl sm:text-2xl font-mono">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <TypingEffect text={"Hello👋"} className={""} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <h2 className=" break-normal">
                    Welcome to my portfolio website!
                  </h2>
                </motion.div>
              </div>
            </div>
            <div className="small-screen">
              <span className=" sr-only">place holder</span>
            </div>
            {/* <motion.span
                initial={{ opacity: 0 }}
                transition={{ delay: 2 }}
                animate={{ opacity: 1 }}
                className=" font-bold md:text-5xl text-5xl text-center md:ml-20 m-5 mt-10 flex flex-col md:flex-row"
              >
                <p className=" mr-2">I am a</p>
                <FlipWords
                  words={["full stack", "back end", "front end"]}
                  duration={3000}
                  className={" font-bold"}
                />
                <span>developer</span>
              </motion.span> */}
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ delay: 2 }}
              whileInView={{ opacity: 1 }}
              className=" small-screen absolute bottom-0"
            >
              <Link
                className="text-md flex flex-col justify-center items-center"
                color="foreground"
                href="#about"
              >
                {"Let's go"}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: -15 }}
                  transition={{
                    repeat: Infinity,
                    repeatDelay: 1,
                    duration: 1,
                  }}
                >
                  <ArrowDown size={30} className=" m-3" />
                </motion.div>
              </Link>
            </motion.div>
            <div className="small-screen">
              <span className=" sr-only">place holder</span>
            </div>
          </div>
        </section>
      ) : (
        <div
          className={`${theme} bg-background text-foreground w-screen h-screen`}
        ></div>
      )}
    </>
  );
}

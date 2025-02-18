"use client";
import React from "react";
import { useThemeContext } from "@/context/theme-context";
import { Image } from "@heroui/react";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import TypingEffect from "./typing-effect";

export default function Hero() {
  const { theme } = useThemeContext();
  return (
    <section
      id="top"
      className={`${theme} bg-background text-foreground w-full h-full flex flex-col justify-center items-center`}
    >
      <div className=" max-w-5xl w-full justify-center items-center h-screen flex flex-col">
        <div className=" flex md:flex-row flex-col px-10 md:px-0 pb-56 md:pb-0">
          <motion.div
            transition={{ duration: 1 }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ x: -40, opacity: 1 }}
            viewport={{ once: true }}
            className=" flex md:flex-row flex-col justify-center items-center"
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
          <div className=" mt-10 md:mt-20 flex flex-col text-2xl font-mono ml-5">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <TypingEffect text={"Hello👋"} className={" md:ml-24"} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <h2 className=" md:ml-24 break-normal">
                Welcome to my portfolio website!
              </h2>
            </motion.div>
          </div>
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
          className=" small-screen absolute bottom-0 left-1/2 right-1/2"
        >
          <Link
            className="text-lg flex flex-col place-self-center justify-center items-center"
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
                duration: 0.5,
              }}
            >
              <ArrowDown size={40} className=" m-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

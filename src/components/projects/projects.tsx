"use client";

import { useThemeContext } from "@/context/theme-context";
import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import { motion } from "motion/react";
import { LampContainer } from "../ui/lamp";

export default function Projects() {
  const { theme } = useThemeContext();
  return (
    <section
      id="projects"
      className={`${theme} h-fit w-full bg-background text-foreground  flex flex-col justify-center items-center `}
    >
      {/* <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl font-semibold pb-5 mt-10"
      >
        {" "}
        {"Things i've built"}
      </motion.h1> */}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className=" bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-3xl font-bankGothic font-semibold tracking-tight text-foreground md:text-4xl mb-28"
        >
          {"Projects"}
        </motion.h1>
      </LampContainer>
      <FocusCards />
    </section>
  );
}

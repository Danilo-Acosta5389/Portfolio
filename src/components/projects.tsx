"use client";

import { useThemeContext } from "@/context/theme-context";
import React from "react";
import { FocusCards } from "./focus-cards";
import { motion } from "motion/react";

export default function Projects() {
  const { theme } = useThemeContext();
  return (
    <section
      id="projects"
      className={`${theme} h-full w-full bg-background text-foreground font-mono flex flex-col justify-center items-center py-20 space-y-10`}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl font-semibold mb-20 mt-10"
      >
        {" "}
        {"Things i've built"}
      </motion.h1>
      <FocusCards />
    </section>
  );
}

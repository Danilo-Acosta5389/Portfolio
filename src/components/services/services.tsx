"use client";

import { useThemeContext } from "@/context/theme-context";
import { motion } from "motion/react";

import WhatIOffer from "@/components/about/myServices";

export default function Services() {
  const { theme } = useThemeContext();
  return (
    <section
      id="services"
      className={`${theme} w-full py-20 mb-20 bg-background text-foreground flex flex-col items-center `}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl px-5 flex flex-col items-center py-10"
      >
        <h1 className="font-bankGothic text-4xl sm:text-5xl md:text-7xl font-semibold overflow-hidden text-center">
          {"What i offer"}
        </h1>
        <WhatIOffer />
      </motion.div>
    </section>
  );
}

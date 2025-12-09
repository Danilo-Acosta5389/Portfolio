"use client";

import { useThemeContext } from "@/context/theme-context";
import { motion } from "motion/react";
import ServicesCraousel from "../ui/services-carousel";
// import EmblaCarousel from "../ui/embla-carousel";

export default function Services() {
  const { theme } = useThemeContext();
  return (
    <section
      id="services"
      className={`${theme} w-full py-20 mb-20 bg-background text-foreground flex flex-col items-center `}
    >
      <div className="w-full lg:px-5 flex flex-col items-center py-10">
        <h1 className="font-bankGothic text-4xl sm:text-5xl md:text-7xl font-semibold overflow-hidden text-center mb-5">
          {"What i offer"}
        </h1>
        {/* <WhatIOffer /> */}
        <ServicesCraousel />
      </div>
      {/* <EmblaCarousel slides={[5, 2, 1]} /> */}
    </section>
  );
}

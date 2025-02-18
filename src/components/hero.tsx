"use client";
import React from "react";
import { useThemeContext } from "@/context/theme-context";

export default function Hero() {
  const { theme } = useThemeContext();
  return (
    <section
      className={`${theme} bg-background text-foreground w-full h-screen py-20 flex flex-col justify-center items-center`}
    >
      <div className="mt-10 text-4xl font-bold">Portfolio</div>
      <p className=" font-semibold text-lg">Coming soon</p>
    </section>
  );
}

"use client";

import { useThemeContext } from "@/context/theme-context";
import React from "react";

export default function About() {
  const { theme } = useThemeContext();
  return (
    <section
      id="about"
      className={`${theme} h-screen w-full bg-background text-foreground font-mono flex flex-col justify-center items-center`}
    >
      <h1 className="text-2xl font-mono">About section</h1>
    </section>
  );
}

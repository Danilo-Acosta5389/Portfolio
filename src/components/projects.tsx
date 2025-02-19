"use client";

import { useThemeContext } from "@/context/theme-context";
import React from "react";

export default function Projects() {
  const { theme } = useThemeContext();
  return (
    <section
      id="projects"
      className={`${theme} h-screen w-full bg-background text-foreground font-mono flex flex-col justify-center items-center`}
    >
      <h1 className="text-2xl font-mono">Project section</h1>
    </section>
  );
}

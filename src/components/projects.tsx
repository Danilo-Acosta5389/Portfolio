"use client";

import { useThemeContext } from "@/context/theme-context";
import React from "react";
import { FocusCards } from "./focus-cards";

export default function Projects() {
  const { theme } = useThemeContext();
  return (
    <section
      id="projects"
      className={`${theme} h-full w-full bg-background text-foreground font-mono flex flex-col justify-center items-center py-20 space-y-10`}
    >
      <h1 className="text-3xl sm:text-4xl font-semibold">
        {" "}
        {"Things i've built"}
      </h1>
      <FocusCards />
    </section>
  );
}

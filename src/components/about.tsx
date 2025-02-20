"use client";

import { useThemeContext } from "@/context/theme-context";
import React from "react";
import { FlipWords } from "./flip-words";
import { motion } from "motion/react";
import { TechIcons } from "./tech-icons";
import { InfiniteMovingLogos } from "./infinite-moving-logos";
import { TypingEffectWhileInView } from "./typing-effect";

export default function About() {
  const { theme } = useThemeContext();
  return (
    <section
      id="about"
      className={`${theme} w-full py-10 bg-background text-foreground font-mono flex flex-col items-center `}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=" max-w-4xl w-full p-5 space-y-5"
      >
        <div className="text-4xl font-mono font-semibold self-start sm:p-5">
          {/* <FlipWords
            words={[
              "full stack developer",
              "front end developer",
              "back end developer",
              "DevOps engeneer",
              "security specialist",
              "mobile apps developer",
              "cloud engeneer",
              "database architect",
            ]}
          /> */}
          <TypingEffectWhileInView text="About me" />
        </div>
        <p className="flex flex-col space-y-10">
          <span>
            Hey, I’m Danilo Acosta—full-stack dev, security enthusiast, and
            all-around problem solver. I come from a background in security,
            where I spent over a decade keeping things locked down in the
            physical world. Now, I do the same in the digital space, building
            sleek, secure, and scalable apps with .NET, React, and Next.js.
          </span>
          <span>
            Lately, I’ve been diving deep into cybersecurity and OT security
            because, let’s be real—what’s the point of great code if it’s not
            secure? I also dabble in the DevOps side of things, working with
            Azure, AWS, CI/CD pipelines, and automation. Linux? Love it. Bash
            scripting? No problem. Whether it’s crafting clean UIs, optimizing
            backend performance, or thinking like a hacker to stay one step
            ahead, I’m all about building things that actually work and last.
          </span>
          <span>
            Tech is my playground, security is my mindset, and learning is just
            part of the game. Let’s build something awesome.
          </span>
        </p>
      </motion.div>
      <div className="pt-20 pb-10">
        <h1 className="text-4xl font-semibold">Stuff i've used</h1>

        {/* <TechIcons /> */}
      </div>
      <InfiniteMovingLogos direction="left" speed="slow" pauseOnHover={true} />
    </section>
  );
}

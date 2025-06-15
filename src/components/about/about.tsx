"use client";

import { useThemeContext } from "@/context/theme-context";
import React from "react";
import { motion } from "motion/react";
import { TypingEffectWhileInView } from "../ui/typing-effect";
import { Accordion, AccordionItem } from "@heroui/accordion";
import LogoCarousel from "../ui/carousel-logos";

export default function About() {
  const { theme } = useThemeContext();
  const backendLiItems =
    ".NET/C#, Node.js, Express.js, Next.js, SQL and NoSQL databases, REST-api, hosting with Linux, NGINX, Azure, AWS, ssl/tls";

  const frontEndLiItems =
    "React, Next.js, JS, TS, HTML and CSS, Tailwind, Blazor, SEO-optimization";
  const devOpsLiItems = "Azure, AWS, Github Actions, Azure DevOps, Docker";

  const otherLiItems =
    "Git, Github, Linux CLI and distros, Powershell, Hardware, Agile, Scrum, Trello";
  return (
    <section
      id="about"
      className={`${theme} w-full py-20 mb-20 bg-background text-foreground flex flex-col items-center `}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=" max-w-4xl w-full p-5 space-y-5"
      >
        <div className="text-3xl sm:text-4xl font-semibold self-start">
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
        <p className="flex flex-col space-y-8">
          <span>
            Hey, I’m Danilo Acosta — full-stack developer, security enthusiast,
            and all-around problem solver. I come from a background in physical
            security and decided a few years back to change career paths and get
            into software development. Now, I’m building sleek, secure, and
            scalable apps with .NET, React, Next.js, and more.
          </span>
          <span>
            I don’t just create web apps—I also configure any type of hosting
            device, software, or cloud service. I set up CI/CD pipelines,
            automate tasks, write scripts—you name it. I’m a big Linux fan and
            love learning new technologies as I go. Lately, I’ve been diving
            deep into cybersecurity and OT security because, let’s be
            real—what’s the point of great code if it’s not secure?
          </span>
          <span>
            Anyway, I’m glad you found your way here. Below, I’ll showcase what
            I do best. If you have any inquiries, just send me a message at the
            bottom of the page! Cheers.
          </span>
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl px-5 flex flex-col items-center py-20"
      >
        <h1 className="text-3xl sm:text-4xl font-semibold pb-10">
          {"What i can do"}
        </h1>
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="Back-end development"
          >
            {backendLiItems
              .trim()
              .split(",")
              .map((item, i) => (
                <li key={i}>{item}</li>
              ))}
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="Front-end development"
          >
            {frontEndLiItems
              .trim()
              .split(",")
              .map((item, i) => (
                <li key={i}>{item}</li>
              ))}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="DevOps">
            {devOpsLiItems
              .trim()
              .split(",")
              .map((item, i) => (
                <li key={i}>{item}</li>
              ))}
          </AccordionItem>
          <AccordionItem key="4" aria-label="Accordion 4" title="Other">
            {otherLiItems
              .trim()
              .split(",")
              .map((item, i) => (
                <li key={i}>{item}</li>
              ))}
          </AccordionItem>
        </Accordion>
      </motion.div>
      <div className="py-20 ">
        <h1 className="text-3xl sm:text-4xl font-semibold">
          {"Stuff i've used"}
        </h1>
      </div>
      {/* <InfiniteMovingLogos direction="left" speed="slow" pauseOnHover={true} /> */}
      <LogoCarousel />
    </section>
  );
}

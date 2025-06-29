"use client";

import { useThemeContext } from "@/context/theme-context";
import * as motion from "motion/react-client";
import { TypingEffectWhileInView } from "../ui/typing-effect";
import { Code, User, Settings, Handshake } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import LogoCarousel from "../ui/carousel-logos";
import ProfileCard from "../hero/profile";

export default function About() {
  const { theme } = useThemeContext();
  return (
    <section
      id="about"
      className={`${theme} w-full my-20 py-20  bg-background text-foreground flex flex-col items-center `}
    >
      <div className=" w-full p-5 space-y-5">
        {/* About me title */}
        <div className="text-5xl sm:text-7xl font-semibold overflow-hidden text-center">
          <TypingEffectWhileInView
            className="font-bankGothic self-center justify-self-center"
            text="About me"
          />
        </div>
        <ProfileCard />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto select-none">
          <motion.div
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="rounded-2xl shadow-md p-6 border-white/20 border-2 bg-white/5 transition-transform hover:scale-[1.02] hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Code className="w-5 h-5 text-foreground" /> What I Do
            </h3>
            <p className="text-foreground/90">
              Need a modern, professional website or web app? I help businesses
              and individuals bring their ideas to life online—with clean
              design, fast performance, and reliable functionality.
            </p>
          </motion.div>

          <motion.div
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="rounded-2xl shadow-md p-6 border-white/20 border-2 bg-white/5 transition-transform hover:scale-[1.02] hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <User className="w-5 h-5 text-foreground" /> A Bit About Me
            </h3>
            <p className="text-foreground/90">
              {"I'm"} Danilo Acosta, a developer with a passion for
              problem-solving and security. I value clear communication,
              efficient solutions, and making the process as smooth as possible
              for you.
            </p>
          </motion.div>

          <motion.div
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="rounded-2xl shadow-md p-6 border-white/20 border-2 bg-white/5 transition-transform hover:scale-[1.02] hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Settings className="w-5 h-5 text-foreground" /> Tailored
              Solutions
            </h3>
            <p className="text-foreground/90">
              Whether you’re launching a brand, improving your digital presence,
              or streamlining internal tools, I’ll deliver a solution tailored
              to your needs. From hosting setup to deployment—I’ve got you
              covered.
            </p>
          </motion.div>
          <motion.div
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="rounded-2xl shadow-md p-6 border-white/20 border-2 bg-white/5 transition-transform hover:scale-[1.02] hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Handshake className="w-5 h-5 text-foreground" />{" "}
              {"Let's Work Together"}
            </h3>
            <p className="text-foreground/90">
              {"Let’s"} make your digital project stress-free. Scroll down to
              see what I can offer, and feel free to reach out if {"you're"}{" "}
              ready to get started.
            </p>
            <Button
              variant={"outline"}
              className={`mt-4 ${
                theme === "dark"
                  ? "hover:bg-white hover:text-black"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              <Link href={"#contact"}>Reach me here</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      {/* Carousell with technology logos */}
      <div className="pt-20 pb-10">
        <h1 className="font-bankGothic text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center font-semibold">
          {"Technologies I use"}
        </h1>
      </div>
      {/* <InfiniteMovingLogos direction="left" speed="slow" pauseOnHover={true} /> */}
      <LogoCarousel />
    </section>
  );
}

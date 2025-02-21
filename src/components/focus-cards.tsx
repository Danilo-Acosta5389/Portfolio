"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

import { useThemeContext } from "@/context/theme-context";
import PortfolioModal from "./portfolio-modal";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    theme: string;
  }) => (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        fill
        alt={card.title}
        className="object-cover absolute w-full h-full"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex flex-col justify-center items-center py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-100"
        )}
      >
        <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200  my-6 border-2 border-transparent px-4 py-1 rounded-3xl">
          {card.title}
        </div>
        <PortfolioModal
          className={cn(
            "transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          card={card}
        />
      </div>
    </motion.div>
  )
);

Card.displayName = "Card";

export type Card = {
  title: string;
  description?: string;
  src: string;
  website?: string;
  github?: string;
  collab?: { name: string; link: string };
};

export function FocusCards() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { theme } = useThemeContext();
  const cards = [
    {
      title: "Portfolio",
      description:
        "This is my portfolio website, the one you are obviously in right now. Congratulations on finding this, btw. It exists for the obvious reason—I want to show you what I can do. This project was created using Next.js, and it is indeed a full-stack project since it handles both front-end and back-end functionality. It utilizes a whole bunch of React libraries, as you can imagine, considering all the special effects and whatnot. Some of the libraries are: clsx, shadcn/ui, HeroUI, Aceternity, Motion, TailwindCSS, and probably more.",
      src: "/portfolio-image.png",
      website: "#",
      github: "https://github.com/Danilo-Acosta5389/Portfolio",
    },
    {
      title: "Vivo Consulting",
      description:
        "This website was designed by my good friend and colleague, Felicia Avila Förnerud, and built by me. This project is a website for the company Vivo Nurse Consulting AB, which is based in Stockholm, Sweden. The website is simple yet functional; it is informative, and you can also email them using the form at the very end of the page. The website utilizes Google's ReCAPTCHA v3 to protect against bots. The project was made with Next.js and uses libraries such as TailwindCSS, Material UI, Motion, ShadCN/UI, google-recaptcha-v3, and more.",
      src: "/vivo-image.png",
      website: "https://dev-vivoconsulting.ddns.net/",
      github: "https://github.com/Danilo-Acosta5389/Vivo-Consulting-AB",
      collab: {
        name: "Felicia Förnerud",
        link: "https://www.feliciafornerud.com/",
      },
    },
    {
      title: "Forum",
      description: `This is my forum project, which was originally my final exam project. It is a full-stack application that handles users, authentication, and cookies. Essentially, it is a forum with topics, posts, and comments.

If you want to interact with the forum, you must create an account and log in (always check your junk mail for the activation code). As a new user, you will be given the role of "User," which allows you to create new posts and comment on existing ones. There are several other roles in the system, such as "Creator," "Admin," and "Super." All roles have default functionality but can also perform actions like upgrading users, blocking users, and hiding posts, comments, and topics.

Users can also report content and edit their personal profile page. This project is built with .NET 8 / ASP.NET and C# on the back end and React with TypeScript and Turborepo on the front end. It uses libraries such as ShadCN/UI, Vite, TanStack Router, and more.`,
      src: "/wis-image.png",
      website: "https://whatisspace.online",
      github: "https://github.com/Danilo-Acosta5389/Forum",
    },
  ];
  //CSS before i changed to flex
  //grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto sm:px-8 w-full
  return (
    <div className=" flex flex-col space-y-10 px-8 w-full max-w-4xl">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          theme={theme}
        />
      ))}
    </div>
  );
}

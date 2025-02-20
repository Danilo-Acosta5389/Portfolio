"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Button } from "@heroui/react";
import { useThemeContext } from "@/context/theme-context";

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
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        " cursor-pointer rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
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
        <Button
          className={cn(
            "transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          See more
        </Button>
      </div>
    </motion.div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { theme } = useThemeContext();
  const cards = [
    {
      title: "Portfolio",
      src: "/portfolio-image.png",
    },
    {
      title: "Vivo Consulting",
      src: "/vivo-image.png",
    },
    {
      title: "Forum",
      src: "/wis-image.png",
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

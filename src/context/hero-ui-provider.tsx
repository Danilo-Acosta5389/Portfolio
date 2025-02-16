"use client";

import { HeroUIProvider as Provider } from "@heroui/react";
import { ReactNode } from "react";

function HeroUIProvider({ children }: { children: ReactNode }) {
  return <Provider>{children}</Provider>;
}

export default HeroUIProvider;

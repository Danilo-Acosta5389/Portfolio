"use client";

import { ReactNode, useContext, useEffect } from "react";
import { ThemeContext } from "./theme-context";

export default function RootColorSetter({
  theme,
  children,
}: {
  theme: string;
  children: ReactNode;
}) {
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (htmlElement) {
      htmlElement.style.backgroundColor = theme === "dark" ? "black" : "white";
    }
  }, [theme]);

  return <>{children}</>;
}

export function useRootColorContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useRootColorContext must be used within a RootColorSetter"
    );
  }
  return context;
}

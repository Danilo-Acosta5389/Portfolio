"use client";

import {
  ReactNode,
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import RootColorSetter from "./root-color-context";

type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string | null>>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // First, try to load from localStorage
    const savedTheme = localStorage.getItem("theme");
    // If we have a saved theme, use it
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // If no saved theme, use system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
      // Save the chosen theme to localStorage

      localStorage.setItem("theme", prefersDark ? "dark" : "light");
      const htmlElement = document.getElementById("html");
      if (prefersDark) {
        if (htmlElement) {
          htmlElement.style.backgroundColor = "black";
        }
      } else {
        if (htmlElement) {
          htmlElement.style.backgroundColor = "white";
        }
      }
    }
  }, []);

  // Only render children when theme is initialized
  if (theme === null) {
    return null;
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <RootColorSetter theme={theme}>{children}</RootColorSetter>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
}

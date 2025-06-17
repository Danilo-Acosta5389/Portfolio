"use client";
import { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "@/context/theme-context";
import Link from "next/link";

export default function Header() {
  const { theme, setTheme } = useThemeContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["home", "about", "projects", "contact"];
  const [scrolled, setScrolled] = useState(false);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200); // Adjust 10px as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    console.log("Menu is open:", isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    setTimeout(() => setActivated(true), 250);
  }, [scrolled]);

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        isBordered={activated} // Adjust based on scroll
        isBlurred={isMenuOpen ? true : scrolled ? true : false} // Adjust based on scroll
        // shouldHideOnScroll
        maxWidth="xl"
        className={`${theme} font-sans text-foreground fixed z-40 w-full h-[64] animate-appearance-in ease-in duration-300 ${
          !scrolled && !isMenuOpen && "bg-transparent border-b-0"
        }`}
      >
        <div className="flex flex-row justify-between max-w-7xl w-full">
          <NavbarContent
            className={`flex flex-row ${
              !scrolled && !isMenuOpen && "text-white"
            }`}
          >
            <NavbarBrand className=" px-0">
              <Link
                href={"#top"}
                className=" font-semibold cursor-pointer pb-2"
              >
                <span className=" text-green-600">root@DaniloAcosta</span>
                <span className=" px-[1px]">:</span>
                <span className=" text-blue-700">~$</span>
                <span className="animate-blink text-2xl font-extrabold pl-1">
                  _
                </span>
              </Link>
            </NavbarBrand>
            <NavbarItem
              className="block sm:hidden cursor-pointer"
              onClick={handleThemeToggle}
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </NavbarItem>
            <NavbarMenuToggle
              // onClick={() => {
              //   setIsMenuOpen(!isMenuOpen);
              // }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden h-8 w-8"
            />
          </NavbarContent>

          {/* Desktop Menu */}
          <NavbarContent
            className={`hidden sm:flex gap-4 pt-2 ${!scrolled && "text-white"}`}
            justify="center"
          >
            <NavbarItem>
              <Link color="foreground" href="#top">
                home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#about">
                about
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#projects">
                projects
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#contact">
                contact
              </Link>
            </NavbarItem>
            <NavbarItem
              className="hidden sm:block cursor-pointer"
              onClick={handleThemeToggle}
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </NavbarItem>
          </NavbarContent>

          {/* Mobile Menu sasdasdasd*/}
          <NavbarMenu className={`${theme} pt-0`}>
            <div className="pt-5"></div>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                  }}
                  className=" hover:text-red-700 w-full flex justify-end font-bankGothic text-4xl text-foreground"
                  href={`#${item}`}
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </div>
      </Navbar>
    </>
  );
}

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

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    console.log("Menu is open:", isMenuOpen);
  }, [isMenuOpen]);

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        isBordered
        isBlurred={true}
        // shouldHideOnScroll
        maxWidth="xl"
        className={`${theme} text-foreground fixed z-40 w-full h-[65]`}
      >
        <div className="flex flex-row justify-between max-w-7xl w-full">
          <NavbarContent className=" flex flex-row">
            <NavbarBrand className=" px-0">
              <Link
                href={"#top"}
                className=" font-sans font-semibold cursor-pointer pb-2"
              >
                <span className=" text-green-600">root@DaniloAcosta</span>
                <span className="text-foreground px-[1px]">:</span>
                <span className="  text-blue-700">~$</span>
                <span className=" animate-blink text-2xl font-extrabold pl-1">
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

          <NavbarContent className="hidden sm:flex gap-4 pt-2" justify="center">
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
          <NavbarMenu className={`${theme} pt-5  space-y-1`}>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                  }}
                  className=" hover:text-red-700 w-full text-2xl text-foreground flex justify-end"
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

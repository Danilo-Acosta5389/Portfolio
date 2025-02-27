import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeroUIProvider from "../context/hero-ui-provider";
import ThemeContextProvider from "@/context/theme-context";
import ReCaptchaProvider from "@/context/recaptcha-provide";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Danilo Acosta Portfolio",
  description: "Danilo Acosta's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReCaptchaProvider>
          <HeroUIProvider>
            <ThemeContextProvider>{children}</ThemeContextProvider>
          </HeroUIProvider>
        </ReCaptchaProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";
import HeroUIProvider from "../context/hero-ui-provider";
import ThemeContextProvider from "@/context/theme-context";
import ReCaptchaProvider from "@/context/recaptcha-provide";
import localFont from "next/font/local";

const bankGothicFont = localFont({
  src: [{ path: "fonts/Bank-Gothic-Light-Regular.otf" }],
  variable: "--font-bank-gothic",
  weight: "400",
  display: "swap",
  fallback: ["sans-serif"],
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Danilo Acosta Portfolio",
  description:
    "Danilo Acosta - Build secure, scalable, and sleek web applications with me. Based in Stockholm, Sweden.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${courierPrime.className} ${bankGothicFont.variable} antialiased`}
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

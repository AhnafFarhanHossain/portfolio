import type React from "react";
import type { Metadata } from "next";
import { Pathway_Extreme, Geist_Mono } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _pathwayExtreme = Pathway_Extreme({
  subsets: ["latin"],
  variable: "--font-sans",
});
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Ahnaf Farhan - Full Stack Developer & Designer",
  description:
    "Full Stack Web Developer and Designer crafting beautiful, functional digital experiences.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${_pathwayExtreme.variable} ${_instrumentSerif.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

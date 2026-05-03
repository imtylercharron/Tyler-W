import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tyler Charron — Mechanical Engineering Student",
  description:
    "Portfolio of Tyler Charron, Mechanical Engineering student at the University of Ottawa, passionate about sustainable energy, CAD, and technical problem-solving.",
  keywords: ["Tyler Charron", "Mechanical Engineering", "University of Ottawa", "Portfolio", "Engineer"],
  authors: [{ name: "Tyler Charron" }],
  openGraph: {
    title: "Tyler Charron — Mechanical Engineering Student",
    description: "Mechanical Engineering student passionate about sustainable energy and technical innovation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

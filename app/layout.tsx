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
  title: "Tyler Charron — Mechanical Engineering",
  description:
    "Currently studying mechanical engineering with interests in robotics, advanced automotive systems, and aerospace technology. Passionate about engineering design, emerging technologies, and building projects that merge creativity with real-world functionality.",
  keywords: ["Tyler Charron", "Mechanical Engineering", "University of Ottawa", "Portfolio", "Engineer"],
  authors: [{ name: "Tyler Charron" }],
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: "Tyler Charron — Mechanical Engineering",
    description: "Currently studying mechanical engineering with interests in robotics, advanced automotive systems, and aerospace technology. Passionate about engineering design, emerging technologies, and building projects that merge creativity with real-world functionality.",
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

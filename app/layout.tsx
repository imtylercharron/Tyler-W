import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

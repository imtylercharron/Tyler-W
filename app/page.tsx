"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Mail, Link as LinkIcon } from "lucide-react";
import Navbar from "@/components/Navbar";

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
import s from "./page.module.css";
import { profile } from "@/lib/data";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const baseText = "TYLER ";
  const lastName = "CHARRON";
  const fullText = baseText + lastName;
  
  useEffect(() => {
    let currentText = "";
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          currentText = fullText.slice(0, currentText.length + 1);
          setDisplayText(currentText);
          timeoutId = setTimeout(type, 150);
        } else {
          isDeleting = true;
          timeoutId = setTimeout(type, 1500);
        }
      } else {
        if (currentText.length > baseText.length) {
          currentText = fullText.slice(0, currentText.length - 1);
          setDisplayText(currentText);
          timeoutId = setTimeout(type, 100);
        } else {
          isDeleting = false;
          timeoutId = setTimeout(type, 500);
        }
      }
    };

    timeoutId = setTimeout(type, 150);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div id="home" style={{ position: 'absolute', top: 0, left: 0 }} />
      <Navbar />

      <section className={s.hero}>
        <Image
          src="/59d4227b-3f1b-45ea-91ef-12900193042d.png"
          alt="Plane Background"
          fill
          className={s.heroBg}
          priority
        />
        <div className={s.heroContent}>
          <div className={s.heroNameWrapper}>
            <h1 className={s.heroName}>{displayText || "T"}</h1>
          </div>
        </div>
      </section>

      <div className={s.contentWrapper}>
        <section className={s.aboutSection} id="about">
          <div className={s.aboutContent}>
            <h2 className={s.aboutTitle}>About Me</h2>
            <p className={s.aboutText}>
              Hi, I’m Tyler Charron. I’m currently studying mechanical engineering with interests in robotics, advanced automotive systems, and aerospace technology. I’m passionate about engineering design, emerging technologies, and building projects that merge creativity with real-world functionality.
            </p>
          </div>
        </section>
        <footer className={s.footer} id="contact">
          <div className={s.quickLinksHorizontal}>
            <a href="#home" className={s.quickLinkItem}>Home</a>
            <a href="/portfolio" className={s.quickLinkItem}>Projects</a>
            <a href="/resume" className={s.quickLinkItem}>Resume</a>
            <a href="/contactme" className={s.quickLinkItem}>Contact me</a>
          </div>
          <div className={s.footerIcons}>
            <a href="https://www.linkedin.com/in/tylercharron/" target="_blank" rel="noopener noreferrer"><LinkedInIcon size={24} /></a>
            <a href="mailto:imtylercharron@gmail.com"><Mail size={24} /></a>
          </div>
        </footer>
      </div>
    </>
  );
}

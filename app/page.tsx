"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Mail, Link as LinkIcon, Search } from "lucide-react";

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
  const fullName = "T|";
  const targetText = "TYLER CHARRON|";
  
  useEffect(() => {
    let currentIndex = 1;
    const intervalId = setInterval(() => {
      if (currentIndex <= targetText.length - 1) {
        setDisplayText(targetText.slice(0, currentIndex) + "|");
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 150);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <nav className={s.nav}>
        <a href="#" className={s.navLogo}>
          &gt; tyler_charron
        </a>
        <div className={s.navLinks}>
          <a href="#" className={s.navLink}>Home</a>
          <a href="#projects" className={s.navLink}>Projects ⌄</a>
          <a href="#contact" className={s.navLink}>Contact</a>
          <a href="#about" className={s.navLink}>About Me</a>
          <a href="#" className={s.navLink} style={{ display: 'flex', alignItems: 'center' }}><Search size={18} /></a>
        </div>
      </nav>

      <section className={s.hero}>
        <Image
          src="/green_planet_bg.png"
          alt="Green Planet Background"
          fill
          className={s.heroBg}
          priority
        />
        <div className={s.heroContent}>
          <div className={s.heroNameWrapper}>
            <h1 className={s.heroName}>{displayText || "T|"}</h1>
          </div>
        </div>
      </section>

      <section className={s.intro}>
        <p className={s.introText}>
          Welcome to my digital space, where I dive into my engineering discoveries.
        </p>
      </section>

      <section className={s.gridSection} id="projects">
        <div className={s.grid}>
          {profile.experience.map((exp, i) => (
            <a href="#" key={`exp-${i}`} className={s.gridCard}>
              <div className={s.gridImageWrap}>
                <div style={{ width: '100%', height: '100%', background: 'var(--bg-secondary)' }} className={s.gridImage}></div>
              </div>
              <div className={s.gridTitle}>{exp.title}</div>
            </a>
          ))}
          {profile.education.map((edu, i) => (
             <a href="#" key={`edu-${i}`} className={s.gridCard}>
              <div className={s.gridImageWrap}>
                <div style={{ width: '100%', height: '100%', background: 'var(--bg-secondary)' }} className={s.gridImage}></div>
              </div>
              <div className={s.gridTitle}>{edu.degree}</div>
            </a>
          ))}
        </div>
      </section>

      <section className={s.quickLinksSection}>
        <div className={s.quickLinksContainer}>
          <h2 className={s.quickLinksTitle}>Quick<br />Links</h2>
          <div className={s.quickLinksList}>
            <a href="#projects" className={s.quickLink}>&gt; PROJECTS</a>
            <a href="#about" className={s.quickLink}>&gt; ABOUT ME</a>
            <a href="#contact" className={s.quickLink}>&gt; CONTACT</a>
          </div>
        </div>
      </section>

      <footer className={s.footer} id="contact">
        <div className={s.footerLinks}>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon size={20} /></a>
          <a href={`mailto:${profile.email}`}><Mail size={20} /></a>
          <a href="#"><LinkIcon size={20} /></a>
        </div>
        <div>
          Copyright © {new Date().getFullYear()} Tyler Charron. All Rights Reserved
        </div>
      </footer>
    </>
  );
}

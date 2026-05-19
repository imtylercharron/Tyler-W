"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import s from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className={`${s.navbar} ${scrolled ? s.scrolled : ''}`}>
        <div className={s.logoContainer}>
          <Image src="/logo.png" alt="Tyler Charron Logo" width={40} height={40} className={s.logoImage} />
          <span className={s.name}>Tyler Charron</span>
        </div>
        
        <div className={`${s.navLinks} ${mobileMenuOpen ? s.open : ''}`}>
          <button className={s.mobileCloseBtn} onClick={closeMenu}>
            <X size={24} />
          </button>
          <a href="/#home" className={s.navLink} onClick={closeMenu}>Home</a>
          <a href="https://www.tylercharron.com/portfolio" className={s.navLink} onClick={closeMenu}>Projects</a>
          <a href="https://www.tylercharron.com/resume" className={s.navLink} onClick={closeMenu}>Resume</a>
          <a href="/#about" className={s.navLink} onClick={closeMenu}>About Me</a>
          <a href="https://www.tylercharron.com/contactme" className={`${s.navLink} ${s.mobileOnly}`} onClick={closeMenu}>Contact Me</a>
        </div>
        
        <div className={s.rightSection}>
          <a href="https://www.tylercharron.com/contactme" className={s.contactBtn}>Contact Me</a>
          <button className={s.hamburger} onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>
      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div className={s.overlay} onClick={closeMenu}></div>
      )}
    </>
  );
}

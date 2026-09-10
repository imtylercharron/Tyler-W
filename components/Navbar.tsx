"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className={`${s.navbar} ${scrolled ? s.scrolled : ''}`}>
        <div className={s.logoContainer}>
          <Link href="/" onClick={closeMenu} className={s.logoLink}>
            <Image src="/logo.png" alt="Tyler Charron Logo" width={40} height={40} className={s.logoImage} />
            <span className={s.name}>Tyler Charron</span>
          </Link>
        </div>
        
        <div className={`${s.navLinks} ${mobileMenuOpen ? s.open : ''}`}>
          <button className={s.mobileCloseBtn} onClick={closeMenu} aria-label="Close menu">
            <X size={24} />
          </button>
          <Link href="/" className={s.navLink} onClick={closeMenu}>Home</Link>
          <Link href="/portfolio" className={s.navLink} onClick={closeMenu}>Portfolio</Link>
          <Link href="/resume" className={s.navLink} onClick={closeMenu}>Resume</Link>
          <Link href="/#about" className={s.navLink} onClick={closeMenu}>About Me</Link>
          <Link href="/contactme" className={`${s.navLink} ${s.mobileOnly}`} onClick={closeMenu}>Contact Me</Link>
        </div>
        
        <div className={s.rightSection}>
          <Link href="/contactme" className={s.contactBtn}>Contact Me</Link>
          <button className={s.hamburger} onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
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

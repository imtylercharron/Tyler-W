"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import s from "./contact.module.css";


export default function ContactMePage() {
  return (
    <main className={s.main}>
      <Navbar />
      
      <div className={s.container}>
        <header className={s.header}>
          <h1 className={s.title}>Contact Me</h1>
        </header>

        <div className={s.content}>
          <div>
            <h2 className={s.subtitle}>Let’s Connect</h2>
            <p className={s.text}>
              Whether it’s engineering, design, collaboration opportunities, or project ideas — feel free to reach out.
            </p>
            <br />
            <p className={s.text}>
              I’m always interested in connecting with people working in robotics, automotive technology, aerospace, and innovative engineering projects.
            </p>
          </div>

          <div className={s.contactInfo}>
            <h3 className={s.contactInfoTitle}>Contact Information</h3>
            
            <div className={s.contactItem}>
              <span className={s.contactLabel}>Email</span>
              <a href="mailto:imtylercharron@gmail.com" className={s.contactValue}>
                imtylercharron@gmail.com
              </a>
            </div>

            <div className={s.contactItem}>
              <span className={s.contactLabel}>LinkedIn</span>
              <a href="https://linkedin.com/in/tylercharron" target="_blank" rel="noopener noreferrer" className={s.contactValue}>
                linkedin.com/in/tylercharron
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

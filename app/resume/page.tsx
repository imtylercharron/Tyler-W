"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import s from "./resume.module.css";
import { Download } from "lucide-react";

export default function ResumePage() {
  // Path to the resume files in the public folder
  const resumePath = "/Tyler%20Charron's%20Resume.pdf";
  const resumePreviewPath = "/resume_preview.png";

  return (
    <main className={s.main}>
      <Navbar />
      
      <div className={s.container}>
        <header className={s.header}>
          <h1 className={s.title}>Resume</h1>
        </header>

        <div className={s.resumeContainer}>
          <img 
            src={resumePreviewPath} 
            alt="Tyler Charron Resume" 
            className={s.resumeImage}
          />
        </div>

        <a href={resumePath} download className={s.downloadBtn}>
          <Download size={20} />
          DOWNLOAD PDF
        </a>
      </div>
    </main>
  );
}

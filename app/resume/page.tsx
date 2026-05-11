"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import s from "./resume.module.css";
import { Download } from "lucide-react";

export default function ResumePage() {
  // Path to the resume file in the public folder
  const resumePath = "/resume.pdf";

  return (
    <main className={s.main}>
      <Navbar />
      
      <div className={s.container}>
        <header className={s.header}>
          <h1 className={s.title}>Resume</h1>
          <p className={s.instructions}>
            Place your actual resume PDF in the <code style={{background: 'rgba(0,0,0,0.05)', padding: '2px 6px', borderRadius: '4px'}}>public/</code> folder and name it <code style={{background: 'rgba(0,0,0,0.05)', padding: '2px 6px', borderRadius: '4px'}}>resume.pdf</code> to display it here.
          </p>
        </header>

        <div className={s.resumeContainer}>
          <iframe 
            src={`${resumePath}#view=FitH`} 
            className={s.pdfViewer} 
            title="Tyler Charron Resume"
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

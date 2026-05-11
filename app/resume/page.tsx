"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import s from "./resume.module.css";
import { profile } from "@/lib/data";
import { ExternalLink, Calendar, MapPin, Download } from "lucide-react";

export default function ResumePage() {
  return (
    <main className={s.main}>
      <Navbar />
      
      <div className={s.container}>
        {/* Header Section */}
        <header className={s.header}>
          <div className={s.headerContent}>
            <h1 className={s.name}>TYLER CHARRON</h1>
            <h2 className={s.title}>Mechanical Engineering Student</h2>
            <div className={s.contactInfo}>
              <span>University of Waterloo '30</span>
              <span className={s.separator}>•</span>
              <span>Waterloo, ON</span>
              <span className={s.separator}>•</span>
              <a href="mailto:imtylercharron@gmail.com" className={s.link}>imtylercharron@gmail.com</a>
            </div>
            <a href="#" className={s.downloadBtn}>
              <Download size={18} />
              Download PDF
            </a>
          </div>
        </header>

        {/* Two Column Layout */}
        <div className={s.grid}>
          {/* Main Column */}
          <div className={s.mainCol}>
            
            <section className={s.section}>
              <h3 className={s.sectionTitle}>About</h3>
              <p className={s.aboutText}>
                I’m currently studying mechanical engineering with interests in robotics, advanced automotive systems, and aerospace technology. I’m passionate about engineering design, emerging technologies, and building projects that merge creativity with real-world functionality.
              </p>
            </section>

            <section className={s.section}>
              <h3 className={s.sectionTitle}>Experience</h3>
              <div className={s.timeline}>
                {profile.experience.map((exp, i) => (
                  <div key={i} className={s.timelineItem}>
                    <div className={s.timelineDot}></div>
                    <div className={s.timelineContent}>
                      <div className={s.timelineHeader}>
                        <h4 className={s.role}>{exp.title}</h4>
                        <span className={s.date}><Calendar size={14}/> {exp.period}</span>
                      </div>
                      <div className={s.company}>
                        <span className={s.companyName}>{exp.company}</span>
                        <span className={s.location}><MapPin size={14}/> {exp.location}</span>
                      </div>
                      <p className={s.description}>{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className={s.section}>
              <h3 className={s.sectionTitle}>Featured Projects</h3>
              <div className={s.projectsGrid}>
                {/* Project 1 */}
                <div className={s.projectCard}>
                  <div className={s.projectHeader}>
                    <h4 className={s.projectName}>Formula SAE Aerodynamics</h4>
                    <ExternalLink size={16} className={s.projectIcon} />
                  </div>
                  <p className={s.projectDesc}>
                    Designed and simulated front wing profiles using ANSYS CFD to maximize downforce while minimizing drag. Manufactured carbon fiber layups.
                  </p>
                  <div className={s.techStack}>
                    <span>SolidWorks</span>
                    <span>ANSYS CFD</span>
                    <span>Composites</span>
                  </div>
                </div>
                
                {/* Project 2 */}
                <div className={s.projectCard}>
                  <div className={s.projectHeader}>
                    <h4 className={s.projectName}>Autonomous Rover Chassis</h4>
                    <ExternalLink size={16} className={s.projectIcon} />
                  </div>
                  <p className={s.projectDesc}>
                    Developed a high-clearance suspension system for an autonomous off-road rover. Performed FEA on load-bearing aluminum components.
                  </p>
                  <div className={s.techStack}>
                    <span>AutoCAD</span>
                    <span>FEA</span>
                    <span>Python</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className={s.sideCol}>
            <section className={s.section}>
              <h3 className={s.sectionTitle}>Education</h3>
              <div className={s.eduItem}>
                <h4 className={s.eduDegree}>B.A.Sc. Mechanical Engineering</h4>
                <p className={s.eduSchool}>University of Waterloo</p>
                <p className={s.eduDate}>Expected 2030</p>
              </div>
            </section>

            <section className={s.section}>
              <h3 className={s.sectionTitle}>Technical Skills</h3>
              <div className={s.skillGroup}>
                <h5 className={s.skillLabel}>Design & Simulation</h5>
                <div className={s.tags}>
                  {profile.skills.engineering.map((skill, i) => (
                    <span key={i} className={s.tag}>{skill}</span>
                  ))}
                </div>
              </div>
              <div className={s.skillGroup}>
                <h5 className={s.skillLabel}>Programming</h5>
                <div className={s.tags}>
                  <span className={s.tag}>Python</span>
                  <span className={s.tag}>MATLAB</span>
                  <span className={s.tag}>C++</span>
                </div>
              </div>
              <div className={s.skillGroup}>
                <h5 className={s.skillLabel}>Core Competencies</h5>
                <div className={s.tags}>
                  {profile.skills.soft.map((skill, i) => (
                    <span key={i} className={s.tag}>{skill}</span>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

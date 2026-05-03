import Image from "next/image";
import {
  MapPin,
  Calendar,
  Clock,
  Award,
  Wrench,
  MessageSquare,
  Mail,
  GraduationCap,
  Briefcase,
  Code2,
  Globe,
} from "lucide-react";

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
import { profile } from "@/lib/data";
import s from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className={s.nav}>
        <div className={s.navInner}>
          <a href="#" className={s.navLogo}>
            Tyler <span>Charron</span>
          </a>
          <div className={s.navLinks}>
            <a href="#experience" className={s.navLink}>Experience</a>
            <a href="#education" className={s.navLink}>Education</a>
            <a href="#skills" className={s.navLink}>Skills</a>
            <a href="#contact" className={s.navLink}>Contact</a>
          </div>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={s.navCta}>
            LinkedIn ↗
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className={s.hero}>
        <div className={s.heroContent}>
          <div className={s.heroLeft}>
            <div className={s.heroBadge}>
              <div className={s.heroBadgeDot} />
              Open to Opportunities
            </div>

            <h1 className={s.heroName}>
              Tyler<br /><span>Charron</span>
            </h1>

            <p className={s.heroTitle}>
              {profile.headline} · {profile.subheadline}
            </p>

            <p className={s.heroAbout}>{profile.about}</p>

            <div className={s.heroActions}>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={s.btnPrimary}
                id="hero-linkedin-btn"
              >
                <LinkedInIcon size={17} />
                Connect on LinkedIn
              </a>
              <a href="#contact" className={s.btnSecondary} id="hero-contact-btn">
                <Mail size={17} />
                Get in Touch
              </a>
            </div>
          </div>

          <div className={s.heroRight}>
            <div className={s.avatarWrap}>
              <div className={s.avatarRing} />
              <Image
                src="/avatar.png"
                alt="Tyler Charron"
                width={340}
                height={340}
                className={s.avatarImg}
                priority
              />
              <div className={s.avatarCard}>
                📍 Ottawa, Ontario
                <span>University of Ottawa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className={s.statsRow}>
        {profile.stats.map((stat) => (
          <div key={stat.label} className={s.statCard}>
            <div className={s.statValue}>{stat.value}</div>
            <div className={s.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* ── EXPERIENCE ── */}
      <section className={s.section} id="experience">
        <div className={s.sectionHeader}>
          <div className={s.sectionTag}><Briefcase size={13} /> Experience</div>
          <h2 className={s.sectionTitle}>Work History</h2>
        </div>

        <div className={s.expGrid}>
          {profile.experience.map((exp) => (
            <div key={exp.id} className={s.expCard}>
              <div className={s.expLogo}>{exp.logo}</div>
              <div className={s.expBody}>
                <div className={s.expTitle}>{exp.title}</div>
                <div className={s.expCompany}>{exp.company}</div>
                <div className={s.expMeta}>
                  <span className={s.expMetaItem}>
                    <Calendar size={12} /> {exp.period}
                  </span>
                  <span className={s.expMetaItem}>
                    <MapPin size={12} /> {exp.location}
                  </span>
                </div>
                <p className={s.expDesc}>{exp.description}</p>
              </div>
              <div className={s.expDuration}>
                <Clock size={11} style={{ display: "inline", marginRight: 4 }} />
                {exp.duration}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={s.divider} />

      {/* ── EDUCATION ── */}
      <section className={s.section} id="education">
        <div className={s.sectionHeader}>
          <div className={s.sectionTag}><GraduationCap size={13} /> Education</div>
          <h2 className={s.sectionTitle}>Academic Background</h2>
        </div>

        {profile.education.map((edu) => (
          <div key={edu.id} className={s.eduCard}>
            <div className={s.eduLogo}>{edu.logo}</div>
            <div>
              <div className={s.eduSchool}>{edu.school}</div>
              <div className={s.eduDegree}>{edu.degree}</div>
              <div className={s.eduMeta}>
                <span className={s.eduMetaItem}><Calendar size={12} /> {edu.period}</span>
                <span className={s.eduMetaItem}><MapPin size={12} /> {edu.location}</span>
              </div>
              <div className={s.eduDetails}>{edu.details}</div>
            </div>
          </div>
        ))}
      </section>

      <div className={s.divider} />

      {/* ── SKILLS ── */}
      <section className={s.section} id="skills">
        <div className={s.sectionHeader}>
          <div className={s.sectionTag}><Code2 size={13} /> Skills</div>
          <h2 className={s.sectionTitle}>Expertise & Tools</h2>
        </div>

        <div className={s.skillsGrid}>
          <div className={s.skillsCard}>
            <div className={s.skillsCardTitle}>
              <Wrench size={15} /> Engineering & Software
            </div>
            <div className={s.skillTags}>
              {profile.skills.engineering.map((skill) => (
                <span key={skill} className={s.skillTag}>{skill}</span>
              ))}
            </div>
          </div>

          <div className={s.skillsCard}>
            <div className={s.skillsCardTitle}>
              <MessageSquare size={15} /> Professional Skills
            </div>
            <div className={s.skillTags}>
              {profile.skills.soft.map((skill) => (
                <span key={skill} className={s.skillTag}>{skill}</span>
              ))}
            </div>
          </div>

          <div className={s.skillsCard}>
            <div className={s.skillsCardTitle}>
              <Globe size={15} /> Languages
            </div>
            <div className={s.skillTags}>
              {profile.skills.languages.map((lang) => (
                <span key={lang} className={s.skillTag}>{lang}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className={s.divider} />

      {/* ── CERTIFICATIONS ── */}
      <section className={s.section}>
        <div className={s.sectionHeader}>
          <div className={s.sectionTag}><Award size={13} /> Certifications</div>
          <h2 className={s.sectionTitle}>Credentials</h2>
        </div>

        <div className={s.certsGrid}>
          {profile.certifications.map((cert) => (
            <div key={cert.name} className={s.certCard}>
              <div className={s.certIcon}><Award size={20} /></div>
              <div>
                <div className={s.certName}>{cert.name}</div>
                <div className={s.certMeta}>{cert.issuer} · {cert.year}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={s.divider} />

      {/* ── CONTACT ── */}
      <section className={s.section} id="contact">
        <div className={s.contactWrap}>
          <h2 className={s.contactTitle}>
            Let&apos;s <span>Connect</span>
          </h2>
          <p className={s.contactSub}>
            I&apos;m always open to new opportunities, collaborations, and conversations about engineering and innovation.
          </p>
          <div className={s.contactLinks}>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${s.contactLink} ${s.contactLinkPrimary}`}
              id="contact-linkedin-btn"
            >
              <LinkedInIcon size={18} /> View LinkedIn Profile
            </a>
            <a
              href={`mailto:${profile.email}`}
              className={`${s.contactLink} ${s.contactLinkSecondary}`}
              id="contact-email-btn"
            >
              <Mail size={18} /> Send an Email
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={s.footer}>
        <p>© {new Date().getFullYear()} Tyler Charron · Built with Next.js & React</p>
      </footer>
    </>
  );
}

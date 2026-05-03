export const profile = {
  name: "Tyler Charron",
  headline: "Mechanical Engineering Student",
  subheadline: "University of Ottawa · Class of 2027",
  location: "Ottawa, Ontario, Canada",
  email: "tylercharron@example.com",
  linkedin: "https://www.linkedin.com/in/tylercharron/",
  about:
    "Aspiring mechanical engineer with a passion for sustainable energy systems, CAD design, and innovative problem-solving. I thrive in collaborative environments and love turning complex engineering challenges into elegant, real-world solutions. Currently pursuing my degree at the University of Ottawa while gaining hands-on experience through internships and design projects.",

  experience: [
    {
      id: "exp1",
      company: "Canadian Nuclear Laboratories",
      title: "Mechanical Engineering Intern",
      period: "May 2024 – Aug 2024",
      duration: "4 months",
      location: "Chalk River, ON",
      description:
        "Supported mechanical design and analysis projects within a nuclear research environment. Assisted in technical documentation, CAD modelling, and cross-functional engineering reviews.",
      logo: "🔬",
    },
    {
      id: "exp2",
      company: "uOttawa Faculty of Engineering",
      title: "Teaching Assistant — Engineering Design",
      period: "Sep 2023 – Apr 2024",
      duration: "8 months",
      location: "Ottawa, ON",
      description:
        "Guided first-year engineering students through design methodology, technical drawing, and prototyping fundamentals. Held weekly office hours and graded design reports.",
      logo: "🎓",
    },
    {
      id: "exp3",
      company: "Freelance",
      title: "CAD Designer & Technical Consultant",
      period: "Jun 2022 – Present",
      duration: "Ongoing",
      location: "Remote",
      description:
        "Delivered custom 3D models and technical drawings for small businesses and startups. Projects spanned product design, architectural components, and custom fabrication parts.",
      logo: "⚙️",
    },
  ],

  education: [
    {
      id: "edu1",
      school: "University of Ottawa",
      degree: "Bachelor of Applied Science — Mechanical Engineering",
      period: "2022 – 2027 (expected)",
      location: "Ottawa, ON, Canada",
      details:
        "Relevant coursework: Thermodynamics, Fluid Mechanics, Solid Mechanics, Machine Design, Sustainable Energy Systems, Engineering Mathematics.",
      logo: "🏛️",
    },
  ],

  skills: {
    engineering: ["SolidWorks", "AutoCAD", "ANSYS", "MATLAB", "Python", "FEA Analysis", "GD&T"],
    soft: ["Technical Writing", "Cross-functional Collaboration", "Project Management", "Problem Solving"],
    languages: ["English (Native)", "French (Professional)"],
  },

  certifications: [
    { name: "SolidWorks CSWA", issuer: "Dassault Systèmes", year: "2023" },
    { name: "AutoCAD Certified User", issuer: "Autodesk", year: "2022" },
  ],

  stats: [
    { label: "GPA", value: "3.8 / 4.0" },
    { label: "Projects", value: "12+" },
    { label: "Internship Months", value: "4+" },
    { label: "Years of Study", value: "3rd Yr" },
  ],
};

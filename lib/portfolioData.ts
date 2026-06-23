export interface BasePortfolioItem {
  id: string;
  category: 'projects' | 'designTeams' | 'reverseEngineering';
  visualLabel: string;
  typeLabel: string;
  title: string;
  shortDescription: string;
  bullets: string[];
  tags: string[];
  gradientColors: string[]; // e.g. ['#f97316', '#0d9488']
  detailDescription: string;
}

export interface ProjectItem extends BasePortfolioItem {
  category: 'projects';
  what: string;
  how: string;
  results: string;
}

export interface DesignTeamItem extends BasePortfolioItem {
  category: 'designTeams';
  team: string;
  role: string;
  impact: string;
}

export interface ReverseEngineeringItem extends BasePortfolioItem {
  category: 'reverseEngineering';
  systemStudied: string;
  method: string;
  findings: string;
}

export type PortfolioItem = ProjectItem | DesignTeamItem | ReverseEngineeringItem;

export const portfolioItems: PortfolioItem[] = [
  {
    id: "proj1",
    category: "projects",
    visualLabel: "ROBOTICS",
    typeLabel: "ACADEMIC PROJECT",
    title: "Autonomous Maze-Solving Robot: Microcontroller, Sensors & Control",
    shortDescription: "Designed, built, and programmed an autonomous maze-solving differential drive robot utilizing infrared distance sensors and a PD control loop.",
    bullets: [
      "Programmed PID control algorithms on Arduino for precise motor synchronization.",
      "Designed a custom PCB for sensor integration and power distribution.",
      "Simulated path planning and maze-solving algorithms in MATLAB."
    ],
    tags: ["Robotics", "C++", "Control Systems", "PCB Design"],
    gradientColors: ["#3b82f6", "#8b5cf6"], // Blue to purple
    detailDescription: "A project focused on integrating software, hardware, and control systems. The robot navigates unknown grid-based mazes by computing optimal paths dynamically and maintaining accurate orientation using sensor feedback.",
    what: "A custom differential-drive mobile robot designed to map, solve, and navigate a 16x16 grid maze from a corner start to the center destination.",
    how: "Constructed with a 3D-printed chassis, micro-metal gearmotors, time-of-flight (ToF) distance sensors, and an Arduino Uno. The software utilizes a Flood-Fill algorithm for mapping/routing, paired with a PD feedback controller for wall-following and navigation alignment.",
    results: "Completed testing across multiple maze patterns with 100% path accuracy, achieving a 28% reduction in navigation time compared to traditional dead-reckoning methods."
  },
  {
    id: "proj2",
    category: "projects",
    visualLabel: "CAD DESIGN",
    typeLabel: "PERSONAL PROJECT",
    title: "Eco-Friendly Water Filtration System: Structural Optimization",
    shortDescription: "Designed and optimized a low-cost, portable gravity-fed water filtration unit intended for humanitarian use in remote communities.",
    bullets: [
      "Modeled all structural and functional filter components in SolidWorks.",
      "Conducted finite element analysis (FEA) to minimize material usage while keeping strength.",
      "Simulated flow rates through variable-porosity filtering media."
    ],
    tags: ["SolidWorks", "FEA", "Flow Simulation", "Sustainability"],
    gradientColors: ["#10b981", "#06b6d4"], // Emerald to Cyan
    detailDescription: "This project addresses global water accessibility by designing a portable filtration system. SolidWorks simulation was used to analyze fluid flow and structural loads under varying water heights.",
    what: "A modular, easy-to-clean water filtration system using locally-sourced sand, charcoal, and ceramic filters to supply clean drinking water.",
    how: "Developed the CAD assembly focusing on modular threads and snaps for toolless assembly. Ran FEA stress tests on shell walls to withstand hydrostatic pressures and optimized wall thicknesses.",
    results: "Reduced overall plastic material volume by 18% while maintaining a safety factor of 2.2, with a calculated flow rate of 4.5 liters per hour."
  },
  {
    id: "team1",
    category: "designTeams",
    visualLabel: "SOLAR CAR",
    typeLabel: "TEAM PROJECT",
    title: "Midnight Sun Solar Car: Sponsorship, Wrap, and Competition Prep",
    shortDescription: "Supported a student solar-car team through sponsorship outreach, branding, logistics, wrap/decal planning, battery-related work, and cross-subteam coordination.",
    bullets: [
      "Built sponsor-facing communication materials and outreach workflow.",
      "Coordinated visual branding, decals, merch, and vehicle presentation.",
      "Balanced engineering constraints with public-facing design decisions."
    ],
    tags: ["Project Management", "Solar Car", "CAD"],
    gradientColors: ["#f97316", "#0d9488"], // Orange to Teal (matching screenshot!)
    detailDescription: "Active participant in the student solar car design team, coordinating branding, technical decals, sponsorship resources, and cross-functional design tasks to prepare the solar vehicle for collegiate competition.",
    team: "Midnight Sun Solar Car (University of Ottawa Student Design Team)",
    role: "Sponsorship Coordinator & Creative Design Liaison",
    impact: "Secured over $15,000 in cash and material sponsorships. Developed the high-contrast aerodynamic wrap design that improved team visibility and won praises during the Formula Sun Grand Prix tech inspection."
  },
  {
    id: "team2",
    category: "designTeams",
    visualLabel: "ROBOTICS CLUB",
    typeLabel: "TEAM PROJECT",
    title: "Mars Rover Student Team: Robotic Arm Joint & Control Integration",
    shortDescription: "Collaborated on the development of a 6-DOF robotic manipulator arm for soil sampling and tool operations at the University Rover Challenge.",
    bullets: [
      "Designed high-torque planetary gearbox mounts for elbow and wrist joints.",
      "Conducted load analysis and selected brushless motors and encoders.",
      "Coordinated with software team to map inverse kinematics to physical actuators."
    ],
    tags: ["Gear Design", "Mechatronics", "SolidWorks", "Joint Analysis"],
    gradientColors: ["#ef4444", "#f97316"], // Red to Orange
    detailDescription: "Worked as a mechanical member of the student Mars Rover team. Focused on upgrading the robotic manipulator arm to perform precision operations like typing on a keyboard, flipping switches, and collecting soil cores.",
    team: "uOttawa Mars Rover Student Team",
    role: "Mechanical Design Member — Robotic Subteam",
    impact: "Designed a lightweight joint layout reducing robotic arm weight by 14% while increasing payload lift capacity from 2.0kg to 3.5kg, leading to a top-10 finish in the robotic arm task."
  },
  {
    id: "rev1",
    category: "reverseEngineering",
    visualLabel: "THERMODYNAMICS",
    typeLabel: "CASE STUDY",
    title: "LTD Stirling Engine: Thermal-to-Mechanical Energy Conversion",
    shortDescription: "Disassembled, modeled, and analyzed a low-temperature differential (LTD) Stirling engine to study thermodynamic cycles and mechanical efficiencies.",
    bullets: [
      "Recreated all 18 mechanical components in SolidWorks with precise tolerance fits.",
      "Conducted motion simulations to analyze dead space and piston strokes.",
      "Calculated theoretical power output based on temperature differentials."
    ],
    tags: ["SolidWorks", "Thermodynamics", "Motion Simulation"],
    gradientColors: ["#ec4899", "#f43f5e"], // Pink to Rose
    detailDescription: "A deep dive study to inspect how small temperature differences can be translated into rotary motion. The project highlights tolerance analysis, thermodynamic calculations, and mechanical losses.",
    systemStudied: "Low-Temperature Differential (LTD) Stirling Engine, designed to run on the warmth of a coffee mug or hand.",
    method: "Fully disassembled a physical engine, measured dimensions of all connecting rods, pistons, flywheel, and displacer chamber using digital micrometers. Recreated the assembly in SolidWorks, performed kinematic simulations, and calculated thermodynamic pressure-volume loops.",
    findings: "Determined that mechanical friction in the piston seal contributed to 34% of power losses. Established that a displacer-to-piston volumetric ratio of 15:1 was optimal for operation at low temperature ranges (5°C to 15°C temperature difference)."
  },
  {
    id: "rev2",
    category: "reverseEngineering",
    visualLabel: "AUTOMOTIVE SYSTEMS",
    typeLabel: "CASE STUDY",
    title: "Hydraulic Disc Brake Caliper: FEA & Hydraulic Pressure Limits",
    shortDescription: "Analyzed a double-piston motorcycle brake caliper to study clamp forces, pressure distribution, and structural stress under extreme braking loads.",
    bullets: [
      "Digitized caliper body geometry and piston bores in CAD.",
      "Simulated fluid pressure load distributions on internal cylinder walls.",
      "Identified yield stress regions and proposed body casting improvements."
    ],
    tags: ["FEA Analysis", "Automotive Design", "Hydraulics"],
    gradientColors: ["#a855f7", "#ec4899"], // Purple to Pink
    detailDescription: "An engineering analysis of an automotive component. Reconstructs fluid-structure interactions to evaluate safety factors, deformation, and clamping force distribution under maximum hydraulic pressures.",
    systemStudied: "Dual-piston hydraulic disc brake caliper system from a standard light motorcycle.",
    method: "Measured and modeled caliper components. Conducted Finite Element Analysis (FEA) under a maximum line pressure of 10 MPa (simulating panic braking) to examine deformation, stress concentration, and pad wear trends.",
    findings: "Discovered stress concentrations exceeding 210 MPa at the bridge radius. Recommended a radius increase from 2mm to 4.5mm in the casting, reducing peak stress by 28% and preventing potential material fatigue cracks."
  }
];

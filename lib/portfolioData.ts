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
  sectionImages?: string[]; // Array of exactly 3 image paths matching the 3 custom sections
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
    title: "Self-Levelling Line-Following Robot",
    shortDescription: "Designed an autonomous line-following robot with an active self-leveling platform, closed-loop PID control, and collision-avoidance object detection for stable payload transport.",
    bullets: [
      "Designed a 3D-printed PLA chassis, motor housing, rail mechanism, and stabilization platform in CAD.",
      "Integrated brightness, distance, and gyroscope sensors into a closed-loop PID control system.",
      "Maintained platform stability within ±3° under a 1 kg payload with line tracking deviation < 2.5 cm."
    ],
    tags: ["Robotics", "PID Control", "CAD Design", "Mechatronics", "3D Printing", "Sensors"],
    gradientColors: ["#3b82f6", "#8b5cf6"],
    detailDescription: "An ME 101 mechanical engineering design project focused on developing an autonomous line-following mobile robot equipped with an active self-leveling payload platform. The system uses closed-loop PID feedback combining gyroscope, brightness, and distance sensors to maintain stability and prevent collisions during operation.",
    what: "• Designed an autonomous line-following robot with an active self-leveling platform for stable object transport\n• Required real-time correction of platform tilt while maintaining line-tracking accuracy\n• Implemented object detection to stop the robot before collisions during autonomous operation",
    how: "• Designed a compact 3D-printed PLA chassis, motor housing, rail mechanism, and stabilization platform in CAD\n• Integrated brightness, distance, and gyroscope sensors into a closed-loop control system\n• Tuned PID control for both self-leveling and line-following to improve stability, tracking accuracy, and response time\n• Calibrated sensor thresholds through repeated testing under different surface and lighting conditions",
    results: "• Maintained platform stability within ±3° during steady-state motion with a 1 kg payload\n• Achieved continuous line following with less than 2.5 cm deviation from the robot centerline\n• Reached a maximum speed of 0.4 m/s while maintaining stable tracking and leveling\n• Reduced unnecessary material use and print time by optimizing component geometry and part placement",
    sectionImages: ["", "", ""]
  },
  {
    id: "proj2",
    category: "projects",
    visualLabel: "DRIVETRAIN",
    typeLabel: "PERSONAL PROJECT",
    title: "Compact Manual Transmission",
    shortDescription: "Designed, built, and tested a compact 5-speed manual transmission driven by a 12V, 100RPM motor, featuring PETG gears, lathe-machined steel shafts, and sliding dog-clutch shifting.",
    bullets: [
      "Developed five spur-gear ratios from 3.00:1 to 0.74:1 with a sliding dog-clutch shifting system.",
      "Calculated tooth forces, bending stress, torque capacity, and clutch loading to size drivetrain.",
      "Machined 3/8-in steel shafts on a lathe for interference-fit 608 bearings with PETG gears."
    ],
    tags: ["Drivetrain", "3D Printing", "Lathe Machining", "Gear Analysis", "CAD Design"],
    gradientColors: ["#0284c7", "#2563eb"],
    detailDescription: "A personal mechanical engineering project focused on the end-to-end design, sizing, machining, and physical testing of a compact 5-speed manual transmission. The drivetrain converts input power from a 12V 100RPM motor through custom gear ratios and sliding dog-clutch engagement.",
    what: "• Designed a compact 5-speed manual transmission driven by a 12V, 100RPM geared motor\n• Developed five spur-gear ratios from 3.00:1 to 0.74:1 with a sliding dog-clutch shifting system\n• Built around PETG gears, steel shafts, and ball bearings",
    how: "• Calculated gear ratios, tooth forces, bending stress, torque capacity, and clutch loading to size the drivetrain\n• 3D printed and iterated PETG gears, adjusting dimensions and tolerances based on physical fit testing\n• Machined 3/8-in cold-worked steel shafts down to 8mm on a lathe for interference-fit 608 bearings and designed custom shaft supports",
    results: "• Produced and tested the full 5-speed gearset through multiple design iterations\n• Achieved press-fit bearing interfaces while refining gear mesh, shaft alignment, and clutch clearances\n• Identified and corrected real-world manufacturing/tolerance issues, moving the design toward final assembly",
    sectionImages: ["", "", ""]
  },
  {
    id: "team1",
    category: "designTeams",
    visualLabel: "AUTOMATION",
    typeLabel: "DESIGN TEAM",
    title: "Waterloo Automation Collective",
    shortDescription: "Designed high-load mechanisms, motor mounts, and power transmission assemblies including a toggle-clamp linkage producing 97kN of clamping force.",
    bullets: [
      "Fabricated a toggle-clamp linkage delivering up to 97kN (10 tons) of clamping force with 28.6:1 mechanical advantage.",
      "Manufactured and assembled motor mount and belt-drive system with precise shaft alignment.",
      "Applied DFMA principles to produce compact drive assemblies under tight packaging constraints."
    ],
    tags: ["Automation", "DFMA", "Linkage Design", "Belt Drives", "Machining", "SolidWorks"],
    gradientColors: ["#0284c7", "#3b82f6"],
    detailDescription: "Mechanical member of the Waterloo Automation Collective design team, focusing on automated machinery, high-load power transmission assemblies, DFMA-driven prototyping, and precision linkage design.",
    team: "• Develop mechanical systems for automated machinery and manufacturing applications\n• Design high-load mechanisms, power transmission assemblies, and supporting structures\n• Prototype and fabricate components with consideration for manufacturability, packaging, and assembly",
    role: "• Fabricated a toggle-clamp linkage capable of producing up to 97kN (10 tons) of clamping force\n• Used a 28.6:1 mechanical advantage to amplify lead-screw input through the linkage\n• Manufactured and assembled the motor mount and belt-drive system\n• Integrated shaft alignment, pulley placement, bearing support, belt tensioning, and component clearances",
    impact: "• Enabled high clamping forces while minimizing required lead-screw input\n• Produced a compact drive assembly within tight mechanical packaging constraints\n• Improved load transfer and motion reliability through proper shaft, bearing, and pulley alignment\n• Applied DFMA principles to transition mechanical concepts into functional hardware",
    sectionImages: ["", "", ""]
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
    findings: "Determined that mechanical friction in the piston seal contributed to 34% of power losses. Established that a displacer-to-piston volumetric ratio of 15:1 was optimal for operation at low temperature ranges (5°C to 15°C temperature difference).",
    sectionImages: ["/moody_plane.png", "/new_plane_bg.png", "/rocket_cotton_candy_sky.png"] // Demo images
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
    findings: "Discovered stress concentrations exceeding 210 MPa at the bridge radius. Recommended a radius increase from 2mm to 4.5mm in the casting, reducing peak stress by 28% and preventing potential material fatigue cracks.",
    sectionImages: ["", "", ""] // Placeholders demo
  }
];

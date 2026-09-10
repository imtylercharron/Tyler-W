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
    visualLabel: "AUTOMOTIVE",
    typeLabel: "CASE STUDY",
    title: "Internal Combustion Engine",
    shortDescription: "Teardown and reverse engineering of a single-cylinder 200–300cc Honda snowblower engine, analyzing mechanical power conversion, fuel-air mixing, and valve timing.",
    bullets: [
      "Disassembled a 200-300cc single-cylinder IC engine into major subsystems.",
      "Traced fuel-air induction, ignition timing, and linear-to-rotational power conversion.",
      "Documented component geometries, wear tolerances, and assembly sequences."
    ],
    tags: ["Engine Systems", "Teardown", "Carburetion", "Thermodynamics", "Power Transmission"],
    gradientColors: ["#ec4899", "#f43f5e"],
    detailDescription: "A practical reverse engineering study of a small single-cylinder internal combustion engine (Honda/snowblower, I1, 200–300cc). The teardown evaluated subsystem interactions including carburetion, piston-crank kinematics, valve timing, and thermal/fluid management.",
    systemStudied: "• Reverse engineered a small single-cylinder internal combustion engine\n• Examined the carburetor, intake/exhaust path, piston-cylinder assembly, crankshaft, valves, and ignition-related components\n• Identified how fuel, air, compression, spark, and mechanical motion interact to produce engine output",
    method: "• Fully disassembled the engine into major subsystems and individual components\n• Inspected each part's geometry, material, function, and connection to surrounding components\n• Traced the fuel-air flow path through the carburetor and the mechanical power path from piston to crankshaft\n• Documented component layout, wear points, tolerances, and assembly order during teardown",
    findings: "• The carburetor controls fuel-air mixing before combustion, directly affecting engine start-up and performance\n• The piston, connecting rod, and crankshaft convert linear combustion force into rotational output\n• Valve timing, sealing, and compression are critical to efficient combustion and power generation\n• The engine relies on tightly integrated mechanical, thermal, and fluid systems despite its compact size",
    sectionImages: ["", "", ""]
  },
  {
    id: "rev2",
    category: "reverseEngineering",
    visualLabel: "SUPERBIKE ENGINE",
    typeLabel: "CASE STUDY",
    title: "Ducati Testastretta Evoluzione Engine",
    shortDescription: "Teardown analysis of a 1098cc V-twin Ducati Testastretta Evoluzione engine, evaluating top-end combustion architecture, desmodromic valve actuation, and assembly constraints.",
    bullets: [
      "Disassembled top-end components of a 1098cc V-twin Ducati high-performance engine.",
      "Analyzed desmodromic mechanical cam/rocker valve actuation and piston-cylinder interfaces.",
      "Evaluated assembly constraints and sealing interfaces in compact motorcycle engines."
    ],
    tags: ["V-Twin Engine", "Desmodromic Valves", "Teardown", "Motorcycle Tech", "Combustion"],
    gradientColors: ["#a855f7", "#ec4899"],
    detailDescription: "A reverse engineering case study of the 1098cc Ducati Testastretta Evoluzione V-twin motorcycle engine. The teardown focused on top-end mechanical architecture, piston and cylinder geometry, desmodromic mechanical valve actuation, and real-world assembly and sealing constraints.",
    systemStudied: "• Ducati Testastretta Evoluzione 1098 cc V-twin engine architecture\n• Piston, cylinder, cylinder head, combustion chamber, and sealing interfaces\n• External engine layout and accessible internal components after partial disassembly",
    method: "• Disassembled accessible engine covers, cylinders, and top-end components\n• Inspected piston geometry, cylinder condition, combustion surfaces, and component interfaces\n• Documented assembly constraints caused by silicone-sealed components that limited access to the lower mechanical system",
    findings: "• Piston and cylinder design showed how combustion forces are transferred into reciprocating motion\n• Silicone-sealed interfaces limited access to the lower crankcase and deeper mechanical systems without risking damage\n• Valve actuation used mechanical cam/rocker geometry to control valve movement rather than relying on traditional valve springs alone\n• Most analysis focused on the top-end combustion system, including pistons, cylinders, valves, and sealing interfaces",
    sectionImages: ["", "", ""]
  },
  {
    id: "rev3",
    category: "reverseEngineering",
    visualLabel: "AUTOMOTIVE BODY",
    typeLabel: "CASE STUDY",
    title: "Automotive Body",
    shortDescription: "Disassembly and structural analysis of a 2016 Lexus RX 350 body system, investigating panel alignment, fastening interfaces, and modular crash structures.",
    bullets: [
      "Disassembled doors, front-end assembly, and body panels on a 2016 Lexus RX 350.",
      "Analyzed fastener mix, bracket hinges, and mounting geometries controlling panel gaps.",
      "Evaluated modular front-end layout for serviceability, repair access, and crash load management."
    ],
    tags: ["Automotive Body", "Vehicle Teardown", "Fastening Systems", "Modular Assembly", "Crash Design"],
    gradientColors: ["#10b981", "#06b6d4"],
    detailDescription: "A reverse engineering case study examining the exterior body structure, panel alignment mechanisms, and chassis mounting interfaces of a 2016 Lexus RX 350. The study evaluated fastening systems, modular front-end assembly, serviceability, and crash/load distribution features.",
    systemStudied: "• Vehicle exterior body panels, doors, front-end assembly, and structural mounting points\n• Fasteners, brackets, hinges, clips, and panel alignment features\n• How removable body components connect to the frame/chassis",
    method: "• Disassembled major exterior components including doors, front body panels, and front-end hardware\n• Documented fastening locations, assembly order, and component interfaces\n• Examined how panels are supported, aligned, and attached during vehicle assembly",
    findings: "• Body panels rely on a mix of bolts, clips, brackets, and hinges for secure but serviceable assembly\n• Panel gaps and alignment are controlled by mounting geometry and fastening points\n• The front-end structure is designed for modular removal, repair access, and crash/load management",
    sectionImages: ["", "", ""]
  }
];

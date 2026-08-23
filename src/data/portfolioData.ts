import { PersonalInfo, Project, TimelineItem, SkillCategory, ServiceItem, RecognitionItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Görkem Uçar',
  greeting: "Hey There, I'm Görkem",
  tagline: 'Unity & C# Developer (Since 2021) • Computer Engineering @ Politecnico di Torino',
  bio: 'I make scalable and cooperative systems for games and I am now enhancing my productivity with AI-integrated workflows. Computer Engineering student at Politecnico di Torino developing with Unity & C# since 2021.',
  education: 'Politecnico di Torino — Computer Engineering (2024 - Present)',
  educationDetail: 'Buca Science High School (95.73/100) • Game Academy • ESP Certified',
  email: 'gorkem.ucar74@gmail.com',
  phone: '+39 334 150 6249',
  location: 'Torino, Italy',
  status: 'Computer Engineering @ Politecnico di Torino (2024 - Present)',
  languages: [
    { language: 'English', level: 'C2 Proficient / C1 Spoken' },
    { language: 'Turkish', level: 'Native' },
    { language: 'Italian', level: 'A1 Basic' },
  ],
  socialLinks: {
    github: 'https://github.com/Gorkem97?tab=repositories',
    itchio: 'https://gorkemucar.itch.io',
    email: 'mailto:gorkem.ucar74@gmail.com',
  },
  avatarUrl: '/profile.jpg',
  stats: [
    {
      label: 'Unity & C# Experience',
      value: 'Since 2021',
      description: 'Continuous hands-on game development & modular systems programming',
    },
    {
      label: 'Shipped Projects',
      value: '4',
      description: 'Featured games, VR titles, and game jam releases',
    },
    {
      label: 'Academic Honors',
      value: '95.73',
      suffix: '/100',
      description: 'Buca Science High School High Honors diploma in mathematics and science',
    },
  ],
};

export const servicesData: ServiceItem[] = [
  {
    id: 'game-development',
    title: 'Unity 3D & C# Game Dev',
    count: 'Since 2021 • 4 Projects',
    description: 'Engineering modular gameplay loops, responsive player mechanics, and decoupled state machines in Unity & C#.',
    iconType: 'game',
    bgColor: '#1F5A63', // Deep Teal
  },
  {
    id: 'ai-integration',
    title: 'AI-Integrated Workflows',
    count: 'Productivity & Tooling',
    description: 'Enhancing development productivity with AI tools (like Antigravity) to accelerate prototyping and gameplay logic iteration.',
    iconType: 'ai',
    bgColor: '#F5AF38', // Warm Amber / Mustard
  },
  {
    id: 'architecture-collaboration',
    title: 'Scalable Systems & Collab',
    count: 'Cooperative & Modular',
    description: 'Building scalable, decoupled architectures and collaborating effectively through structured Git/GitHub team workflows.',
    iconType: 'code',
    bgColor: '#E26D46', // Terracotta
  },
];

export const recognitionsData: RecognitionItem[] = [
  {
    id: 'icyss-belgrade',
    name: 'ICYSS 2021 International',
    role: '3rd Place in Psychology / Empirical Research',
    organization: 'Belgrade, Serbia',
    quote: 'Awarded 3rd place by an international scientific jury for empirical data modeling and English presentation.',
    year: '2021',
    tag: 'International Award',
    avatarText: 'IC',
  },
  {
    id: 'esp-europe',
    name: 'JA Europe / GençBizz',
    role: 'Entrepreneurship Skills Pass (ESP)',
    organization: 'Junior Achievement Europe',
    quote: 'Certified in entrepreneurial management and product leadership, steering product development in national finals.',
    year: '2022',
    tag: 'International Certification',
    avatarText: 'JA',
  },
  {
    id: 'buca-science-honors',
    name: 'Buca Science High School',
    role: 'High School Diploma with High Honors',
    organization: 'İzmir, Turkey',
    quote: 'Graduated with a 95.73/100 grade point average, demonstrating strong academic foundation in mathematics.',
    year: '2022',
    tag: 'Academic Honors',
    avatarText: 'BS',
  },
];

export const timelineData: TimelineItem[] = [
  {
    id: 'polito-computer-engineering',
    period: '2024 - Present',
    title: 'Computer Engineering (B.Sc.)',
    organization: 'Politecnico di Torino',
    location: 'Torino, Italy',
    type: 'education',
    typeLabel: 'Higher Education',
    description: 'Pursuing Bachelor of Science in Computer Engineering at Politecnico di Torino.',
    achievements: [
      'Core coursework in computer architecture, software engineering, and computational systems.',
    ],
    skills: ['Computer Engineering', 'C / C++', 'Object-Oriented Design', 'Systems Architecture'],
    accentColor: 'blue',
  },
  {
    id: 'unity-game-dev-2021',
    period: '2021 - Present',
    title: 'Unity 3D & C# Game Development',
    organization: 'Independent & Team Projects',
    location: 'Torino, Italy / Remote',
    type: 'project',
    typeLabel: 'Core Experience',
    description: 'Hundreds of hours of hands-on game development experience since 2021. Built diverse systems both solo and in teams—ranging from custom shaders to directory management, singletons, and ScriptableObject-based architectures.',
    achievements: [
      'Engineered modular game systems from shaders and singleton managers to ScriptableObject data pipelines.',
      'Shipped multiple titles including Game Jam games, GreenMate, and VR projects through solo and team workflows.',
      'Maintained light practical exploration of AI workflow tools like Antigravity for prototyping assistance.',
    ],
    skills: ['Unity 3D', 'C#', 'ScriptableObjects', 'Shaders', 'Architecture', 'Team Collaboration'],
    accentColor: 'teal',
  },
  {
    id: 'game-academy-hypercasual',
    period: '2022 - 2023',
    title: 'Game Developer Program',
    organization: 'Game Academy (Oyun ve Uygulama Akademisi)',
    location: 'İzmir, Turkey',
    type: 'certification',
    typeLabel: 'Certification',
    description: 'Hands-on training focused on rapid game prototyping, C# scripting, team sprints, and core player feedback loops.',
    achievements: [
      'Built a strong foundation in modular code design and an intuition in all aspects of video game development',
    ],
    skills: ['Unity 3D', 'C#', 'Prototyping', 'Teamwork', 'Game Loops'],
    accentColor: 'amber',
  },
  {
    id: 'high-school-fen-lisesi',
    period: '2018 - 2022',
    title: 'Science High School Diploma (95.73 / 100)',
    organization: 'Buca İnci Özer Tırnaklı Science High School',
    location: 'İzmir, Turkey',
    type: 'education',
    typeLabel: 'High School Degree',
    description: 'Graduated with high honors (95.73/100), establishing strong foundations in advanced mathematics and analytical logic.',
    achievements: [
      'Rigorous background in mathematics, analytical logic, and science.',
    ],
    skills: ['Advanced Mathematics', 'Analytical Logic', 'Problem Solving'],
    accentColor: 'amber',
  },
];

export const projectsData: Project[] = [
  {
    id: 'antigravity-ai-unity',
    title: 'AI Tooling & Gameplay Framework (Antigravity)',
    category: 'ai',
    categoryLabel: 'Unity 3D • AI Workflow',
    subtitle: 'Integrating Antigravity AI tooling into scalable Unity 3D gameplay architecture',
    description: 'Modular gameplay architecture and AI workflow integration in Unity & C#, featuring decoupled controllers and clean state machines.',
    longDescription: 'An experimental Unity 3D project exploring the integration of Antigravity AI tooling into modern game development workflows. Emphasizes clean, scalable architecture, event-driven state decoupling, and responsive camera systems adaptable across diverse project domains.',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    videos: [
      {
        title: 'Task Assignment & AI Dispatch',
        url: '/Anti-showcase/assign.m4v',
        description: 'AI behavior assignment, agent command dispatching, and dynamic state evaluation in Unity 3D.',
      },
      {
        title: 'Object Carry & Physical Interaction',
        url: '/Anti-showcase/carry.m4v',
        description: 'Smooth kinematic object holding, weight responsiveness, and state machine transitions in Unity 3D.',
      },
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
    ],
    tags: ['Unity 3D', 'C#', 'AI Integration', 'Architecture'],
    techStack: ['Unity Engine', 'C#', 'Antigravity AI Tool', 'State Machine'],
    year: '2024 - 2025',
    featured: true,
    status: 'In Active Development',
    metrics: {
      label: 'Focus',
      value: 'AI & Arch',
    },
    links: {
      github: 'https://github.com/Gorkem97?tab=repositories',
      itchio: 'https://gorkemucar.itch.io',
    },
    features: [
      'Integrated Antigravity AI tooling to accelerate developer prototyping and behavior logic.',
      'Modular C# state machine cleanly decoupling player input, movement, and camera logic.',
      'Scalable architecture structured for fast iteration and cross-domain gameplay features.',
      'Practical lighting and 3D visual setups supporting gameplay clarity and performance.',
    ],
    technicalHighlights: [
      'Zero-allocation memory practices and decoupled event buses.',
      'Extensible design patterns enabling straightforward expansion in team environments.',
    ],
  },
  {
    id: 'greenmate-eco-game',
    title: 'GreenMate Eco Game',
    category: 'game',
    categoryLabel: 'Unity 3D • Client Project',
    subtitle: 'Interactive sustainability challenge game for the GreenMate initiative',
    description: 'Gamified environmental sustainability simulation challenging players to manage resources and eco-decisions.',
    longDescription: 'Created specifically for GreenMate, this project models conservation and waste reduction loops through interactive gameplay challenges built in Unity and C#.',
    coverImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop',
    videos: [
      {
        title: 'GreenMate Gameplay Session 1',
        url: '/greenkids/greenmate-session1.m4v',
        description: 'Interactive environmental mini-games and gameplay loop.',
      },
      {
        title: 'GreenMate Gameplay Session 2',
        url: '/greenkids/greenmate-session2.m4v',
        description: 'Eco challenge tasks, feedback UI, and scoring logic.',
      },
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop',
    ],
    tags: ['Unity', 'C#', 'GreenMate', 'Eco Game'],
    techStack: ['Unity 3D', 'C#', 'UI Toolkit', 'Game Design'],
    year: '2023 - 2024',
    featured: true,
    status: 'Completed',
    metrics: {
      label: 'Partner',
      value: 'GreenMate',
    },
    links: {
      itchio: 'https://gorkemucar.itch.io/greenmate',
      github: 'https://github.com/Gorkem97/GreenKids',
      liveDemo: 'https://gorkemucar.itch.io/greenmate',
    },
    features: [
      'Interactive resource management loop modeling energy and waste impact.',
      'Responsive touch and mouse controls tailored for clean usability.',
    ],
    technicalHighlights: [
      'Event-driven architecture separating gameplay state from UI components.',
    ],
  },
  {
    id: 'vr-spatial-experience',
    title: '6-DoF VR Experience',
    category: 'vr',
    categoryLabel: 'Virtual Reality • Completed Title',
    subtitle: 'Physics-based virtual reality game with spatial hand interactions',
    description: 'Immersive VR title built with Unity XR featuring tactile hand interactions, spatial puzzles, and 3D audio.',
    longDescription: 'A completed 6-DoF VR game developed with Unity XR. Features natural physics-based grabbing, comfort locomotion settings, and spatial audio mechanics.',
    coverImage: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1200&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1000&auto=format&fit=crop',
    ],
    tags: ['Unity VR', 'OpenXR', 'C#', '6-DoF'],
    techStack: ['Unity XR', 'C#', 'Blender', 'Spatial Audio'],
    year: '2023 - 2024',
    featured: true,
    status: 'Completed',
    metrics: {
      label: 'Platform',
      value: 'Unity XR',
    },
    links: {
      github: 'https://github.com/JustWeety/Gozde-Durmus-Vr-Project',
    },
    videos: [],
    features: [
      'Physics-based direct hand interaction for picking, tossing, and tool usage.',
      'Comfort-focused locomotion including teleportation and smooth turning.',
    ],
    technicalHighlights: [
      'Optimized single-pass rendering targeting stable 90 FPS.',
    ],
  },
  {
    id: 'game-jam-series',
    title: 'Game Jam Releases (2 Titles)',
    category: 'game',
    categoryLabel: 'Game Jams • Itch.io',
    subtitle: '2 playable games engineered during 48-hour sprint Game Jams',
    description: 'Collection of 2 playable games created under 48-hour Game Jam constraints and published on Itch.io.',
    longDescription: 'Participated in 2 separate Game Jams, designing core mechanics, programming responsive C# controllers, and shipping playable prototypes within 48 hours.',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    videos: [
      {
        title: 'Trapped - Game Jam Playthrough',
        url: '/jam-titles/trapped.mp4',
        description: 'Obstacle avoidance, procedural hazards, and level completion mechanics.',
      },
      {
        title: 'Game Jam Showcase Session 1',
        url: '/jam-titles/jam-session1.m4v',
        description: '48-hour sprint Game Jam project live gameplay capture.',
      },
      {
        title: 'Game Jam Showcase Session 2',
        url: '/jam-titles/jam-session2.mp4',
        description: 'Core controller dynamics, sprite animation feedback, and audio integration.',
      },
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop',
    ],
    tags: ['Unity', 'C#', '48-Hour Jams', 'Itch.io'],
    techStack: ['Unity 3D', 'C#', 'Aseprite', 'Audacity'],
    year: '2022 - 2024',
    featured: true,
    status: '2 Games Shipped',
    metrics: {
      label: 'Games',
      value: '2 Jams',
    },
    links: {
      itchio: 'https://gorkemucar.itch.io',
      github: 'https://github.com/Gorkem97?tab=repositories',
    },
    features: [
      'Rapidly scoped and delivered complete game loops under tight deadlines.',
      'Responsive player feedback with screenshake, particle bursts, and audio.',
    ],
    technicalHighlights: [
      'Modular ScriptableObject architecture for rapid prototyping.',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'game-engine',
    name: 'Game Development & Engine',
    iconName: 'Gamepad2',
    description: 'Unity 3D, C#, and interactive gameplay systems',
    skills: [
      { name: 'Unity 3D Engine', level: 'Core', experience: 'Since 2021', categoryTag: 'Engine' },
      { name: 'C# (Game Programming)', level: 'Core', experience: 'Since 2021', categoryTag: 'Programming' },
      { name: 'AI Integration & Workflows', level: 'Active', experience: 'Antigravity AI Tooling', categoryTag: 'AI & Tools' },
      { name: 'Unity XR / VR Development', level: 'Proficient', experience: 'Completed Project', categoryTag: 'VR' },
      { name: 'Game Jam Prototyping', level: 'Proficient', experience: '2 Jams Shipped', categoryTag: 'Development' },
    ],
  },
  {
    id: 'programming-cs',
    name: 'Architecture & CS Foundations',
    iconName: 'Cpu',
    description: 'Scalable software architecture, algorithms, and systems',
    skills: [
      { name: 'Scalable Architecture & Patterns', level: 'Core', experience: 'Modular & Extensible', categoryTag: 'Architecture' },
      { name: 'C# Language & OOP', level: 'Core', experience: 'Design Patterns & Systems', categoryTag: 'Languages' },
      { name: 'C Language', level: 'Core', experience: 'Pointers & Memory', categoryTag: 'Foundations' },
      { name: 'Algorithms & Data Structures', level: 'Proficient', experience: 'Core Concepts', categoryTag: 'CS Core' },
      { name: 'Computer Architecture', level: 'Academic', experience: 'Politecnico di Torino', categoryTag: 'Hardware/OS' },
    ],
  },
  {
    id: 'tools-art',
    name: 'Tools & Creative',
    iconName: 'Sparkles',
    description: 'Group collaboration, 3D/2D art, and production tools',
    skills: [
      { name: 'Git & GitHub (Group Workflows)', level: 'Proficient', experience: 'PRs, Team Collab & Version Control', categoryTag: 'Collaboration' },
      { name: 'Blender (3D & Lighting Basics)', level: 'Practical', experience: 'Asset Prep & Lighting for Dev', categoryTag: '3D Art' },
      { name: 'Aseprite & Pixel Studio', level: 'Proficient', experience: '2D Pixel Art & Sprites', categoryTag: '2D Art' },
      { name: 'Logic Pro & Audacity', level: 'Proficient', experience: 'Audio Design & Production', categoryTag: 'Audio' },
      { name: 'Affinity Suite (Designer & Photo)', level: 'Proficient', experience: 'Digital UI & Graphics', categoryTag: 'Design' },
    ],
  },
  {
    id: 'languages-spoken',
    name: 'Languages',
    iconName: 'Globe',
    description: 'International communication',
    skills: [
      { name: 'English', level: 'C2 Proficient / C1 Spoken', experience: 'Certified (TAA)', categoryTag: 'Fluent' },
      { name: 'Turkish', level: 'Native', experience: 'Mother Tongue', categoryTag: 'Native' },
      { name: 'Italian', level: 'A1 Basic', experience: 'Living in Torino', categoryTag: 'Basic' },
    ],
  },
];

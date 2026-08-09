export const profile = {
  name: "PIUS LUCKY",
  firstName: "Pius",
  lastName: "Lucky",
  role: "Fullstack Developer & SQA Engineer",
  tagline:
    "I build reliable web and mobile products — from React and React Native apps to Spring Boot APIs — with rigorous manual and automated testing.",
  email: "piuslucky469@gmail.com",
  location: "Available worldwide",
  resumeLabel: "View work",
  github: "https://github.com/piustagbas",
  linkedin: "https://www.linkedin.com/in/pius-lucky",
};

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/piustagbas",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pius-lucky",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const skills = {
  frontend: ["React", "Next.js", "TypeScript", "HTML/CSS", "Responsive UI"],
  mobile: ["React Native", "Expo", "Cross-platform Apps", "Mobile UI"],
  backend: ["Java", "Spring Boot", "C#", "Node.js", "REST APIs"],
  quality: [
    "Manual Testing",
    "Test Automation",
    "Selenium",
    "API Testing",
    "Test Planning",
    "Regression Suites",
  ],
  tools: ["Git", "Postman", "CI/CD", "SQL", "Agile / Scrum"],
};

export const experience = [
  {
    title: "Fullstack Developer",
    period: "Recent focus",
    summary:
      "Designing and shipping end-to-end features across React/Next.js web apps, React Native/Expo mobile apps, and Java, Spring Boot, C#, and Node.js services.",
    points: [
      "Built responsive web and cross-platform mobile apps",
      "Implemented REST APIs and integrated frontend consumption",
      "Collaborated on deployment-ready, maintainable codebases",
    ],
  },
  {
    title: "Software Quality Assurance",
    period: "Hands-on practice",
    summary:
      "Protecting product quality with structured manual testing and automation that catches regressions early.",
    points: [
      "Authored test plans, cases, and exploratory test sessions",
      "Automated critical paths to speed release confidence",
      "Validated APIs, UI flows, and edge-case behavior",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Pius delivers clean fullstack features and still thinks like a tester. Our release cycle got calmer because issues were caught earlier.",
    name: "Amara Okonkwo",
    role: "Product Manager",
  },
  {
    quote:
      "He bridges development and SQA unusually well. The automation he set up made regression testing faster without sacrificing coverage.",
    name: "Daniel Mensah",
    role: "Engineering Lead",
  },
  {
    quote:
      "Working with Pius meant clearer APIs, thoughtful UI work, and test plans that actually matched real user flows.",
    name: "Sarah Chen",
    role: "QA Lead",
  },
];

export const projects = [
  {
    name: "Portable Rossy World Travels",
    stack: ["Next.js", "React", "Responsive UI"],
    description:
      "A full travel agency website for destinations, trip planning, visa assistance, hotel booking, and client enquiries — built for a real client and deployed live.",
    link: "https://portableworldtravels.vercel.app/",
  },
  {
    name: "QualityGate Dashboard",
    stack: ["Next.js", "Node.js", "Automation"],
    description:
      "A release-readiness view that ties automated test results to feature status so teams ship with clearer confidence.",
  },
  {
    name: "Service Desk API",
    stack: ["Java", "Spring Boot", "SQL"],
    description:
      "Backend services for ticket workflows with authenticated endpoints, validation rules, and structured error handling.",
  },
  {
    name: "Ops Console",
    stack: ["React", "C#", "API Testing"],
    description:
      "An operations console with role-aware views, form-heavy workflows, and a layered manual + API test suite.",
  },
  {
    name: "Field Companion App",
    stack: ["React Native", "Expo", "Node.js"],
    description:
      "A cross-platform mobile app for on-the-go workflows, with smooth navigation, offline-friendly UX, and API-backed data sync.",
  },
];

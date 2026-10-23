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
  /** Drop your photo at public/images/pius.jpg — shown as a circle only. */
  portrait: "/images/pius.jpg",
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
    photo: "/images/avatars/amara.svg",
  },
  {
    quote:
      "He bridges development and SQA unusually well. The automation he set up made regression testing faster without sacrificing coverage.",
    name: "Daniel Mensah",
    role: "Engineering Lead",
    photo: "/images/avatars/daniel.svg",
  },
  {
    quote:
      "Working with Pius meant clearer APIs, thoughtful UI work, and test plans that actually matched real user flows.",
    name: "Sarah Chen",
    role: "QA Lead",
    photo: "/images/avatars/sarah.svg",
  },
];

export const featuredTestimonial = {
  company: "Mercor",
  href: "https://t.mercor.com/EvZDH",
  screenshot: "/testimonials/mercor-referral.jpg",
  screenshotAlt: "Mercor referral message inviting Pius to refer talent",
  caption:
    "Mercor invited Pius to refer talent based on the quality of his work — a real-world vote of confidence from the platform.",
};

export const projects = [
  {
    name: "Portable Rossy World Travels",
    stack: ["Next.js", "React", "Responsive UI"],
    description:
      "A full travel agency website for destinations, trip planning, visa assistance, hotel booking, and client enquiries — built for a real client and deployed live.",
    link: "https://portableworldtravels.vercel.app/",
    image: "/projects/portable-rossy.jpg",
    imageAlt: "Portable Rossy World Travels welcome page",
  },
  {
    name: "Lagos Drivers Link",
    stack: ["Next.js", "React", "Responsive UI"],
    description:
      "A Lagos driver-hire platform that matches families and businesses with verified, background-checked chauffeurs — clear pricing, fast matching, and dedicated support across the city.",
    link: "https://lagosdriverslink.com/",
    image: "/projects/lagos-drivers.jpg",
    imageAlt: "Lagos Drivers Link welcome page",
  },
  {
    name: "Shindara Motors & Logistics",
    stack: ["Next.js", "React", "Responsive UI"],
    description:
      "An automotive and logistics company site for vehicle sales, instalments, driver placement, training, and fleet support — with live inventory and clear enquiry flows.",
    link: "https://www.shindaraautos.com/",
    image: "/projects/shindara.jpg",
    imageAlt: "Shindara Motors & Logistics welcome page",
  },
  {
    name: "Splendor Spring School",
    stack: ["Next.js", "React", "Responsive UI"],
    description:
      "A child-centred school website for Splendor Spring School in Makoko, Lagos — highlighting affordable and free education, learning stages, news, and parent access.",
    link: "https://www.splendorspringschool.com/",
    image: "/projects/splendor.jpg",
    imageAlt: "Splendor Spring School welcome page",
  },
  {
    name: "Jevah",
    stack: ["React Native", "Expo", "Node.js"],
    description:
      "A gospel social app for Christian community — Bible engagement, gospel music, and faith-centred connection in one mobile experience.",
    link: "https://www.jevahapp.com/",
    image: "/projects/jevah.jpg",
    imageAlt: "Jevah gospel app welcome page",
  },
];

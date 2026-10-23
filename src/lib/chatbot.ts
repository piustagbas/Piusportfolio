import { profile } from "@/lib/data";

export type ChatReply = {
  text: string;
  suggestEmail?: boolean;
};

const emailLine = `For anything more specific, reach out to Pius at ${profile.email} — he’ll get back to you.`;

const responses: { keys: string[]; reply: ChatReply }[] = [
  {
    keys: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"],
    reply: {
      text: `Hi! I’m Pius’s portfolio assistant. I can answer common questions about his skills, experience, and availability. What would you like to know?`,
    },
  },
  {
    keys: ["who are you", "who is pius", "about", "introduce", "tell me about"],
    reply: {
      text: `${profile.firstName} ${profile.lastName} is a ${profile.role}. He builds reliable web and mobile products with React, Next.js, React Native, and Expo, plus backend services with Java, Spring Boot, C#, and Node.js — and strong manual and automation testing experience.`,
    },
  },
  {
    keys: [
      "skill",
      "stack",
      "tech",
      "technology",
      "react",
      "next",
      "java",
      "spring",
      "node",
      "c#",
      "csharp",
      "mobile",
      "react native",
      "expo",
      "android",
      "ios",
      "app",
    ],
    reply: {
      text: "Pius works with React, Next.js, React Native, Expo, Java, Spring Boot, C#, and Node.js. That covers web, mobile, and backend. On the quality side he covers manual testing, test automation, Selenium, API testing, and regression suites.",
    },
  },
  {
    keys: ["native", "cross-platform", "cross platform"],
    reply: {
      text: "Yes — Pius builds mobile apps with React Native and Expo for iOS and Android from one codebase, including polished mobile UI and API integrations.",
    },
  },
  {
    keys: ["test", "qa", "sqa", "quality", "automation", "selenium", "manual"],
    reply: {
      text: "Pius has hands-on SQA experience — writing test plans and cases, exploratory testing, API validation, and automating critical paths so teams can ship with more confidence.",
    },
  },
  {
    keys: ["experience", "background", "work history", "what do you do"],
    reply: {
      text: "He brings a dual focus: fullstack development (building features end-to-end) and software quality assurance (verifying those features work). That mix helps him deliver cleaner, more reliable software.",
    },
  },
  {
    keys: [
      "project",
      "portfolio",
      "work sample",
      "built",
      "travel",
      "rossy",
      "portable",
      "client",
      "lagos",
      "driver",
      "shindara",
      "splendor",
      "school",
      "jevah",
      "gospel",
    ],
    reply: {
      text: "Live client work includes Portable Rossy World Travels, Lagos Drivers Link (hire verified drivers in Lagos), Shindara Motors & Logistics, Splendor Spring School, and Jevah — a gospel social app. Browse them all in the Projects section.",
      suggestEmail: true,
    },
  },
  {
    keys: ["hire", "available", "availability", "freelance", "job", "open to work", "collaborate"],
    reply: {
      text: `Yes — Pius is open to fullstack roles, SQA collaborations, and project work. ${emailLine}`,
      suggestEmail: true,
    },
  },
  {
    keys: ["rate", "price", "pricing", "cost", "salary", "budget"],
    reply: {
      text: `Rates depend on project scope and engagement type. Share your needs with Pius at ${profile.email} and he’ll discuss options with you.`,
      suggestEmail: true,
    },
  },
  {
    keys: ["location", "where", "remote", "based"],
    reply: {
      text: `${profile.location}. Remote collaboration works great for most projects.`,
    },
  },
  {
    keys: ["contact", "email", "reach", "talk", "message", "connect", "github", "linkedin", "social"],
    reply: {
      text: `You can reach Pius by email at ${profile.email}, on GitHub at ${profile.github}, or on LinkedIn at ${profile.linkedin}.`,
      suggestEmail: true,
    },
  },
  {
    keys: ["service", "offer", "help with", "can you", "can he"],
    reply: {
      text: "He can help with fullstack web apps, React Native/Expo mobile apps, API development, UI implementation, test planning, and automation. If you have a specific need, email is the fastest next step.",
      suggestEmail: true,
    },
  },
  {
    keys: ["thanks", "thank you", "cool", "great", "awesome", "nice"],
    reply: {
      text: `You’re welcome! If you want to continue the conversation with Pius directly, email ${profile.email}.`,
      suggestEmail: true,
    },
  },
];

export const quickPrompts = [
  "Who is Pius?",
  "What are his skills?",
  "Does he build mobile apps?",
  "Does he do QA testing?",
  "How can I contact him?",
];

export function getChatReply(input: string): ChatReply {
  const normalized = input.toLowerCase().trim();

  if (!normalized) {
    return {
      text: "Ask me anything about Pius’s skills, experience, or availability.",
    };
  }

  for (const entry of responses) {
    if (entry.keys.some((key) => normalized.includes(key))) {
      return entry.reply;
    }
  }

  return {
    text: `I don’t have a perfect answer for that yet. For personal or detailed questions, please reach out to Pius at ${profile.email} — he’ll respond directly.`,
    suggestEmail: true,
  };
}

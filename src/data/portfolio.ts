import type { PortfolioData } from "../domain/types.js";

export const portfolioData: PortfolioData = {
  name: "Shivam Taneja",
  role: "Software Engineer",
  website: "https://www.shivamtaneja.com/",
  tagline: "Full-stack engineer building useful products.",
  intro: [
    "Software Engineer at NTT Data.",
    "Open to software engineering roles.",
  ],
  sections: {
    about: {
      id: "about",
      title: "About",
      lines: [
        "I build clean, production-grade software.",
        "Current focus: backend systems, dev tools, and AI features.",
      ],
    },
    experience: {
      id: "experience",
      title: "Experience",
      lines: [
        "NTT Data - Associate Software Development Engineer (Jun 2024 - Present)",
        "Botpresso - Software Developer Intern (Jan 2024 - Jun 2024)",
      ],
    },
    projects: {
      id: "projects",
      title: "Side Projects",
      lines: [
        "GraphMySelf - personal AI memory layer",
        "https://graphmyself.com",
        "",
        "EZNotify - multi-channel notification SDK",
        "https://eznotify.dev",
        "",
        "DecodeMyCode - AI code explanation SaaS",
        "https://decodemycode.com",
      ],
    },
    mentorship: {
      id: "mentorship",
      title: "Mentorship & Judging",
      lines: [
        "HackBVP 7.0 - Judge & Mentor",
        "HackMSIT 1.0 - Judge & Mentor",
        "HackNovate 7.0 - Judge & Mentor",
      ],
    },
    certifications: {
      id: "certifications",
      title: "Certifications",
      lines: [
        "Google - Generative AI Leader Certification",
        "Microsoft - Azure Fundamentals (AZ-900)",
      ],
    },
    contact: {
      id: "contact",
      title: "Contact",
      lines: [
        "Website: https://www.shivamtaneja.com/",
        "Social: @codesbyshivam",
      ],
    },
  },
  links: [{ label: "Website", value: "https://www.shivamtaneja.com/" }],
};

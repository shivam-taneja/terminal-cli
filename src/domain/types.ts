export type SectionId =
  | "about"
  | "experience"
  | "projects"
  | "mentorship"
  | "certifications"
  | "contact";

export interface SectionContent {
  id: SectionId;
  title: string;
  lines: string[];
}

export interface LinkItem {
  label: string;
  value: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  website: string;
  tagline: string;
  intro: string[];
  sections: Record<SectionId, SectionContent>;
  links: LinkItem[];
}

export type CommandName =
  | "home"
  | "help"
  | "about"
  | "experience"
  | "projects"
  | "mentorship"
  | "certifications"
  | "contact"
  | "clear"
  | "exit";

import { portfolioData } from "../data/portfolio.js";
import type { CommandName, SectionId } from "../domain/types.js";
import { wrapLines } from "../lib/text.js";
import { commandDefinitions } from "../commands/registry.js";
import { renderWindow } from "../ui/window.js";

function renderSection(sectionId: SectionId): string {
  const section = portfolioData.sections[sectionId];
  return renderWindow(section.title, wrapLines(section.lines));
}

export function renderHome(): string {
  const intro = wrapLines(portfolioData.intro).slice(0, 2);
  const links = portfolioData.links.map(
    (item) => `${item.label.toLowerCase()}: ${item.value}`,
  );
  const commands = [
    "commands: help, about, experience, projects, contact, clear, exit",
  ];

  const lines = [
    portfolioData.tagline,
    "",
    ...intro,
    "",
    ...links,
    "",
    ...commands,
  ];

  return renderWindow("shivamtaneja", lines);
}

export function renderHelp(): string {
  const priority = new Set([
    "help",
    "about",
    "experience",
    "projects",
    "contact",
    "clear",
    "exit",
  ]);
  const lines = commandDefinitions
    .filter((command) => priority.has(command.name))
    .map((command) => `${command.name.padEnd(12, " ")}${command.description}`);
  return renderWindow("help", lines);
}

export function renderByCommand(command: CommandName): string {
  switch (command) {
    case "home":
      return renderHome();
    case "help":
      return renderHelp();
    case "about":
    case "experience":
    case "projects":
    case "mentorship":
    case "certifications":
    case "contact":
      return renderSection(command);
    case "clear":
    case "exit":
      return "";
  }
}

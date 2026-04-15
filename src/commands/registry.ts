import type { CommandName } from "../domain/types.js";

export interface CommandDefinition {
  name: CommandName;
  aliases: string[];
  description: string;
}

export const commandDefinitions: CommandDefinition[] = [
  { name: "home", aliases: ["home", "h"], description: "home screen" },
  {
    name: "help",
    aliases: ["help", "?"],
    description: "list commands",
  },
  {
    name: "about",
    aliases: ["about", "me"],
    description: "short profile",
  },
  {
    name: "experience",
    aliases: ["experience", "exp"],
    description: "work timeline",
  },
  {
    name: "projects",
    aliases: ["projects", "work"],
    description: "selected projects",
  },
  {
    name: "mentorship",
    aliases: ["mentorship", "judge"],
    description: "Show mentorship and judging",
  },
  {
    name: "certifications",
    aliases: ["certifications", "certs"],
    description: "Show certifications",
  },
  {
    name: "contact",
    aliases: ["contact", "links"],
    description: "website and socials",
  },
  {
    name: "clear",
    aliases: ["clear", "cls"],
    description: "clear screen",
  },
  { name: "exit", aliases: ["exit", "quit", "q"], description: "close cli" },
];

export function resolveCommand(input: string): CommandName | undefined {
  const normalized = input.trim().toLowerCase();
  if (!normalized) {
    return undefined;
  }

  const found = commandDefinitions.find((command) =>
    command.aliases.includes(normalized),
  );
  return found?.name;
}

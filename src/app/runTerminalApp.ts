import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import { resolveCommand } from "../commands/registry.js";
import { theme } from "../ui/theme.js";
import { renderByCommand, renderHome } from "./renderers.js";

function printScreen(content: string): void {
  if (!content) {
    return;
  }
  console.log(content);
  console.log("");
}

export async function runTerminalApp(): Promise<void> {
  const rl = createInterface({ input, output });

  console.clear();
  printScreen(renderHome());

  try {
    while (true) {
      const answer = await rl.question(theme.prompt("shivam@portfolio ~ $ "));
      const command = resolveCommand(answer);

      if (!answer.trim()) {
        continue;
      }

      if (!command) {
        console.log(
          theme.warn("Unknown command. Type `help` to view commands.\n"),
        );
        continue;
      }

      if (command === "clear") {
        console.clear();
        printScreen(renderHome());
        continue;
      }

      if (command === "exit") {
        console.log(theme.dim("See you soon. Keep shipping."));
        break;
      }

      printScreen(renderByCommand(command));
    }
  } finally {
    rl.close();
  }
}

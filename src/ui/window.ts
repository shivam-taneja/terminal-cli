import { getContentWidth } from "../lib/text.js";

function borderLine(
  left: string,
  fill: string,
  right: string,
  width: number,
): string {
  return `${left}${fill.repeat(width)}${right}`;
}

function fit(line: string, width: number): string {
  if (line.length > width) {
    return `${line.slice(0, Math.max(0, width - 1))}…`;
  }
  return line.padEnd(width, " ");
}

export function renderWindow(title: string, lines: string[]): string {
  const width = getContentWidth();
  const output: string[] = [`$ ${title}`, borderLine("", "─", "", Math.min(width, 72))];
  for (const line of lines) {
    output.push(fit(line, Math.min(width, 72)));
  }
  return output.join("\n");
}

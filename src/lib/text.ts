const DEFAULT_WIDTH = 76;

export function getContentWidth(): number {
  const terminalWidth = process.stdout.columns ?? 100;
  const constrained = Math.min(Math.max(terminalWidth, 60), 100);
  return constrained - 4;
}

export function wrapText(input: string, width = DEFAULT_WIDTH): string[] {
  if (!input.trim()) {
    return [""];
  }

  const words = input.split(/\s+/);
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length <= width) {
      current = next;
      continue;
    }

    if (current) {
      lines.push(current);
      current = word;
      continue;
    }

    lines.push(word.slice(0, width));
    current = word.slice(width);
  }

  if (current) {
    lines.push(current);
  }

  return lines;
}

export function wrapLines(lines: string[], width = DEFAULT_WIDTH): string[] {
  return lines.flatMap((line) => wrapText(line, width));
}

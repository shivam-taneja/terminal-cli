# Shivam Taneja Terminal Portfolio

My interactive terminal portfolio. This is a command-line alternative to my main web portfolio.

## Quick Start

You do not need to install anything. Just open your terminal and run (requires Node.js):

```bash
npx shivamtaneja
```

## Development

This repo uses [pnpm](https://pnpm.io/). Node.js 18+ is required.

```bash
pnpm install
pnpm dev          # run from source (tsx)
pnpm build        # emit dist/ for the published CLI
pnpm start        # run built output
```

**Local global install** (test the CLI like a published package):

```bash
pnpm run local:link    # build + register this folder in pnpm’s global bin
shivamtaneja           # run from any directory while linked
```

When you are finished testing, remove the global install (plain `pnpm unlink` does not undo `pnpm link --global`):

```bash
pnpm run local:unlink    # same as: pnpm remove -g shivamtaneja
```

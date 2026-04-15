# Shivam Taneja Terminal Portfolio

My interactive terminal portfolio. This is a command-line alternative to my main web portfolio.

## Development

This repo uses [pnpm](https://pnpm.io/). Node.js 18+ is required.

```bash
pnpm install
pnpm dev          # run from source (tsx)
pnpm build        # emit dist/ for the published CLI
pnpm start        # run built output
```

To try the local CLI like an installed package:

```bash
pnpm build && pnpm link --global
shivamtaneja
```

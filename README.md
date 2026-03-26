# Website Runtime Base Next

A reusable Next.js starter for sandboxed website generation. This repo is meant
to be cloned into `/workspace/site`, edited in place by the runtime agents, and
previewed immediately with `next dev`.

## Included

- Next.js App Router
- Tailwind CSS v4
- TypeScript
- OpenNext Cloudflare adapter
- Wrangler configuration for Cloudflare Workers

## Local development

Install dependencies:

```bash
npm ci
```

Start the dev server:

```bash
npm run dev
```

The sandbox runtime typically starts the app with:

```bash
npm run dev -- --hostname 0.0.0.0 --port 3001
```

## Cloudflare workflow

Preview the Workers runtime locally:

```bash
npm run preview
```

Deploy to Cloudflare Workers:

```bash
npm run deploy
```

Generate Cloudflare env types:

```bash
npm run cf-typegen
```

## Notes for the website runtime

- The repo should stay deterministic and easy to edit.
- Do not add interactive setup steps to the normal happy path.
- Keep the App Router and Tailwind setup intact unless there is a strong reason
  to change the project structure.

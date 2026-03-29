<!-- BEGIN:nextjs-agent-rules -->
# Project Instructions

This is a standard Next.js App Router project with Tailwind CSS and OpenNext for Cloudflare Workers.

## Primary goal
Implement the requested website quickly and correctly. Prefer shipping the requested UI and content over broad repository exploration.

## Default assumptions
Treat the project as normal modern Next.js unless the code, build output, or runtime errors prove otherwise.

## Read only the minimum first
Before making your first edit, inspect only the smallest set of files needed to orient yourself, usually:
- `package.json`
- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `next.config.ts` or `next.config.mjs`
- `open-next.config.ts` if present
- `wrangler.jsonc` if present
- any local components or sections directly relevant to the requested change

## Avoid unnecessary exploration
Do not explore these by default:
- `node_modules/`
- `.next/`
- `next/dist/`
- framework internals
- generated files
- unrelated routes or components

Do not read framework docs or internal source code unless a specific blocker requires it.

## When deeper investigation is allowed
Only inspect framework internals, docs, or generated files if:
- a build error points to them
- a runtime error points to them
- a requested feature depends on a project-specific config you cannot infer from the normal app files
- you have already tried the standard Next.js approach and it failed

When this happens, read only the smallest relevant file or document, then return to implementation.

If you read from `node_modules` or `next/dist`, you must have a concrete error message or blocker that justifies it.

## Implementation strategy
- Make the first meaningful code change as early as possible.
- Prefer editing the actual app files over prolonged reconnaissance.
- Reuse the existing project structure and styling system.
- Keep changes focused on the requested website outcome.

## Verification
Use local feedback to validate assumptions:
- inspect the relevant files
- make the change
- run the appropriate local check or preview
- fix concrete errors if they appear

## Output behavior
Surface concise progress based on actual work:
- which app files you inspected
- which files you changed
- what you verified

Do not spend time narrating speculative exploration.
<!-- END:nextjs-agent-rules -->

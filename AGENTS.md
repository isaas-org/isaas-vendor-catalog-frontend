# Agent instructions

Vendor-facing frontend for iSaaS (Next.js, deployed to Vercel). Vendors manage their listings, pricing plans and media. Project decisions and history are in the knowledge base: https://github.com/isaas-org/isaas-catalog-kb-agent-based-development

## Rules

- Never commit or push to `main`. Work only on the feature branch the repo owner names (pattern `feature/FD-<n>_<Description>`).
- All data comes from `isaas-vendor-catalog-mgmt-backend` through `src/lib/backend.ts`. Never connect to the database from this app.
- Business logic stays in the backend. Server Components and Server Actions call the backend API; don't build a second backend in route handlers.
- `BACKEND_API_URL` is server-only. Never expose it with a `NEXT_PUBLIC_` prefix.
- Cache Components is on (`cacheComponents: true`). Fresh, per-request data goes in a component wrapped in `<Suspense>`; cacheable data uses `"use cache"`.

## Commands

- Dev: `npm run dev` (port 3001, expects the backend on 8082)
- Lint and build: `npm run lint && npm run build`

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

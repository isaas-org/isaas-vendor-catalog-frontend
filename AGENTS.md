# Agent instructions

Vendor-facing frontend for iSaaS (Next.js, deployed to Vercel). Vendors manage their listings, pricing plans and media. Project decisions and history are in the knowledge base: https://github.com/isaas-org/isaas-catalog-kb-agent-based-development

## Rules

- Never commit or push to `main`. Work only on the feature branch the repo owner names (pattern `feature/FD-<n>_<Description>`).
- All data comes from `isaas-vendor-catalog-mgmt-backend` through `src/lib/backend.ts`. Never connect to the database from this app.
- Business logic stays in the backend. Server Components and Server Actions call the backend API; don't build a second backend in route handlers.
- `BACKEND_API_URL` is server-only. Never expose it with a `NEXT_PUBLIC_` prefix.
- Cache Components is on (`cacheComponents: true`). Fresh, per-request data goes in a component wrapped in `<Suspense>`; cacheable data uses `"use cache"`.

## Commands

- Install: `npm install` (there is no lockfile; always run this on a fresh clone)
- Dev: `npm run dev` (port 3001, expects the backend on 8082)
- Lint and build: `npm run lint && npm run build`
- End-to-end tests: `npm run test:e2e` (builds first; needs `npx playwright install chromium` once)

## Next.js docs

This app is on Next.js 16.4 (see `package.json`). Its APIs differ from older versions you may know: Cache Components, `connection()` for request-time data, and async request APIs. Read the docs for this version at https://nextjs.org/docs (App Router) before writing code, and heed deprecation notices.

After `npm install`, the same docs pinned to the installed version are also at `node_modules/next/dist/docs/`.

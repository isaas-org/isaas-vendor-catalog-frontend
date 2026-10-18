# isaas-vendor-catalog-frontend

Next.js app where vendors manage their iSaaS listings: items, pricing plans, features and media. All data comes from [`isaas-vendor-catalog-mgmt-backend`](https://github.com/isaas-org/isaas-vendor-catalog-mgmt-backend); this app never talks to the database.

## Stack

- Next.js 16 (App Router, Cache Components), React 19, TypeScript
- Tailwind CSS 4, ESLint
- Deployed to Vercel

## Running locally

Start `isaas-vendor-catalog-mgmt-backend` first (it listens on 8082), then:

```bash
cp .env.example .env.local
npm install
npm run dev        # http://localhost:3001
```

The home page shows the backend's health status, which confirms the two are wired together.

## Configuration

| Variable | Example | Notes |
|----------|---------|-------|
| `BACKEND_API_URL` | `http://localhost:8082` | Server-side only. Read at request time, so one build works across environments |

## Structure

```
src/app/                     routes (App Router)
src/components/              shared components
src/lib/backend.ts           server-side client for the backend API
```

## Checks

```bash
npm run lint
npm run build
npx playwright install chromium   # once
npm run test:e2e                  # Playwright, against a production build
```

There is no lockfile, so `npm install` always resolves dependencies fresh. CI (`.github/workflows/test.yml`) runs lint and build in one job and the Playwright tests in another, on every PR and every push to `feature/**`. End-to-end tests live in `e2e/`.

## Known issues

`npm audit` reports 5 high-severity findings, all from `braces` (GHSA-vfj7-8cjw-p6xm), reached through `eslint-config-next` -> `@next/eslint-plugin-next` -> `fast-glob@3.3.1` (pinned by Next.js). No patched `braces` exists yet, and the suggested `npm audit fix --force` downgrades `eslint-config-next` to 14.x, which doesn't match Next 16. It is lint tooling only: `npm audit --omit=dev` is clean. Recheck on each Next.js upgrade.

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
```

CI (`.github/workflows/test.yml`) runs both on every PR and every push to `feature/**`.

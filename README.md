# RCRT Template: Blank

Bare minimum scaffold with authentication and the RCRT API client. Use this as a starting point when you want full control over the layout and pages.

## What's Included

- React 18 + Vite + TypeScript + Tailwind CSS
- `@rcrt/api` client pre-configured
- Firebase authentication (Google sign-in)
- Minimal layout (just padding, no sidebar or navbar)
- Single home page with getting-started instructions
- Zustand store (empty, ready for your state)
- Dockerfile + Cloud Build config for Cloud Run deploy

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment config
cp .env.example .env
# Edit .env with your RCRT API URL and Firebase config

# Start dev server
npm run dev
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Your RCRT API Gateway URL |
| `VITE_FIREBASE_API_KEY` | Firebase API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID |
| `VITE_RCRT_PREVIEW_TOKEN` | Preview token (for WebContainer preview) |

## Project Structure

```
src/
  App.tsx                    — Routing + auth wrapper
  main.tsx                   — Entry point
  index.css                  — Tailwind + design tokens
  pages/
    HomePage.tsx             — Getting started page
  components/
    layout/
      AppLayout.tsx          — Minimal wrapper (just padding)
  lib/
    api-client.ts            — RcrtClient singleton
    auth.tsx                 — Firebase auth gate
    store.ts                 — Zustand state (empty)
    utils.ts                 — cn() helper
```

## Adding Features

### Add a page

1. Create `src/pages/MyPage.tsx`:
```tsx
export default function MyPage() {
  return <div>My new page</div>;
}
```

2. Add route in `src/App.tsx`:
```tsx
import MyPage from './pages/MyPage';
// Inside <Route element={<AppLayout />}>:
<Route path="/my-page" element={<MyPage />} />
```

### Add a sidebar

Replace `AppLayout.tsx` with a sidebar layout. See `rcrt-template-dashboard` or `rcrt-template-chatbot` for examples.

### Add a top navbar

Replace `AppLayout.tsx` with a navbar layout. See `rcrt-template-storefront` for an example.

### Query breadcrumbs

```tsx
import { getClient } from '../lib/api-client';

const data = await getClient().queryBreadcrumbs({ tags: ['type:item'], limit: 20 });
```

### Send a chat message

```tsx
import { getClient } from '../lib/api-client';

const result = await getClient().sendChat('Hello!');
```

## Deploy

Push to main triggers Cloud Build → Cloud Run (if `cloudbuild.yaml` is configured).

## Built with RCRT

This template is designed for [RCRT Code Studio](https://github.com/possibl-ai/rcrt-v2). RCRT is the backend — all state lives in breadcrumbs, all AI runs through agents, all external APIs connect through services.

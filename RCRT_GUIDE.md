# rcrt-template-blank

> Agent-facing guide. Read this before editing any file in this template.

## What This Template Does

The minimal starting point. Provides auth, API client, and a blank canvas. Use only when no other template fits. The other templates (chatbot, dashboard, portal, storefront, support) ship with substantially more pre-built functionality and should be preferred.

## When to Use Blank
- Custom game or interactive experience
- Highly specialised single-page tool with no standard layout
- Explicit user request to start from scratch
- Experimental/prototype work

## What Is Pre-Built (very little)

| What | Import | Usage |
|---|---|---|
| RcrtClient | src/lib/api-client.ts | const client = getRcrtClient() |
| getAuthToken | src/lib/auth.tsx | Used internally by RcrtClient |
| registerDefaultWidgets | @possibl/rcrt-ui | Call once in main.tsx |

## File Structure

```
src/
  main.tsx         ← TOUCH: entry — call registerDefaultWidgets()
  App.tsx          ← TOUCH: root component and routes
  lib/
    api-client.ts  ← LEAVE: RcrtClient singleton
    auth.tsx       ← LEAVE: DO NOT MODIFY
  index.css        ← TOUCH: global styles (Tailwind base)
.env               ← CONFIG: VITE_API_URL, VITE_FIREBASE_*
```

## Starting Pattern

```tsx
// src/main.tsx
import { registerDefaultWidgets } from '@possibl/rcrt-ui';
registerDefaultWidgets(); // ALWAYS call this first

// src/App.tsx
import { getRcrtClient } from './lib/api-client';

export function App() {
  const client = getRcrtClient();
  // Your app here — query breadcrumbs, create breadcrumbs, call agents
  return <div>Your custom UI</div>;
}
```

## RCRT API Client

```typescript
const client = getRcrtClient();

// Query breadcrumbs
const items = await client.queryBreadcrumbs(['my-tag'], 20);

// Create a breadcrumb
const bc = await client.createBreadcrumb({
  name: 'my-item-' + Date.now(),
  tags: ['my-tag'],
  content: { key: 'value' }
});

// Start a chat session
const session = await client.createSession({ agentId: 'chat' });
```

## Note on Widget Registry

Always call `registerDefaultWidgets()` at startup. RCRT tools return widget cards (ProjectCard, CIStatusCard, etc.) that need the registry to render in the extension and any embedded chat.

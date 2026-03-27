export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto py-16 space-y-6">
      <h1 className="text-3xl font-bold text-foreground">
        Welcome to your RCRT app.
      </h1>
      <p className="text-muted-foreground">
        Start building! This is a blank template with authentication and the RCRT API client pre-configured.
      </p>

      <div className="rounded-2xl border border-border p-6 space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Next steps</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">Add a page:</strong>{' '}
            Create a file in <code className="text-primary bg-primary/10 px-1 rounded">src/pages/</code> and add a Route in{' '}
            <code className="text-primary bg-primary/10 px-1 rounded">App.tsx</code>
          </li>
          <li>
            <strong className="text-foreground">Add navigation:</strong>{' '}
            Edit <code className="text-primary bg-primary/10 px-1 rounded">AppLayout.tsx</code> to add a sidebar or navbar
          </li>
          <li>
            <strong className="text-foreground">Query data:</strong>{' '}
            Use <code className="text-primary bg-primary/10 px-1 rounded">getClient().queryBreadcrumbs()</code> to fetch breadcrumbs
          </li>
          <li>
            <strong className="text-foreground">Send chat:</strong>{' '}
            Use <code className="text-primary bg-primary/10 px-1 rounded">getClient().sendChat(text)</code> to talk to your agent
          </li>
          <li>
            <strong className="text-foreground">Change theme:</strong>{' '}
            Edit CSS variables in <code className="text-primary bg-primary/10 px-1 rounded">src/index.css</code>
          </li>
        </ul>
      </div>

      <div className="rounded-2xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-2">Resources</h2>
        <ul className="space-y-1 text-sm">
          <li>
            <a href="https://github.com/possibl-ai/rcrt-v2" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              RCRT Documentation
            </a>
          </li>
          <li>
            <a href="https://react.dev" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              React Documentation
            </a>
          </li>
          <li>
            <a href="https://tailwindcss.com/docs" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              Tailwind CSS Documentation
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

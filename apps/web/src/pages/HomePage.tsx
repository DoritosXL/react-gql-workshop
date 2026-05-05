export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-20 text-center">
      <div className="flex flex-col items-center gap-2">
        <span className="font-mono text-xs tracking-widest text-emerald-400 uppercase">
          Phase 1 — Routing
        </span>
        <h1 className="text-5xl font-bold tracking-tight">react-gql-workshop</h1>
        <p className="mt-2 text-lg text-gray-400">
          A learning scaffold for React Router, GraphQL, and gql.tada
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {['React Router', 'GraphQL', 'gql.tada', 'Storybook'].map((tool) => (
          <div
            key={tool}
            className="rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-center text-sm text-gray-300"
          >
            {tool}
          </div>
        ))}
      </div>

      <p className="max-w-prose text-sm text-gray-500">
        Use the nav above to explore the placeholder pages. Data fetching will be wired up in a
        later phase.
      </p>
    </div>
  )
}

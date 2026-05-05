export default function UsersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold">Users</h2>
        <p className="mt-1 text-sm text-gray-400">
          This page will list all users fetched from the GraphQL API.
        </p>
      </div>

      <div className="rounded-xl border border-dashed border-gray-700 bg-gray-900/50 p-12 text-center">
        <p className="text-sm text-gray-500">
          Placeholder — data fetching coming in Phase 2
        </p>
      </div>
    </div>
  )
}

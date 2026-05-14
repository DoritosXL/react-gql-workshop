# 01 — Raw Fetch

**Approach:** Plain `fetch` over HTTP to a GraphQL endpoint. No GraphQL client.

## What this does

Sends a GraphQL query as a plain HTTP POST request and manually handles the response.

```ts
const data = await fetch('http://localhost:4000/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: print(UserQuery) }),
}).then((res) => res.json())
```

## What you have to do manually

- **Stringify the query** — gql.tada produces a `DocumentNode` object. The HTTP endpoint expects a plain string, so you need `print()` from the `graphql` package to serialize it.
- **Parse the response** — `fetch` gives you a `ReadableStream`. You call `.json()` to consume it and get the actual data.
- **Type the response yourself** — `res.json()` returns `any`. You annotate it manually with `ResultOf<typeof Query>` from gql.tada.
- **Manage loading state** — you wire up `useState` + `useEffect` yourself. No built-in `loading` or `error` flags.
- **Guard against empty state** — on first render the data isn't there yet, so you have to check `userData.length > 0` before rendering.

## Why not just do this in production?

This works fine for simple cases but doesn't scale:

- **No caching** — every component that needs users fires its own request, every time.
- **No deduplication** — two components requesting the same query at the same time send two requests.
- **No normalized cache** — updating a user in one place doesn't update it elsewhere.
- **Boilerplate per query** — every page needs its own fetch logic, state, and error handling.

## What a GraphQL client (e.g. urql) gives you instead

- Accepts `DocumentNode` directly — no `print()` needed.
- Returns `{ data, fetching, error }` out of the box.
- Caches results and deduplicates in-flight requests.
- One setup at the app root, used everywhere via a hook.

## See also

- `02-urql/` — same Users page, implemented with urql _(coming in Phase 3)_

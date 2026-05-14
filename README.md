# react-gql-workshop

A progressive learning project for building React applications with GraphQL, from fundamentals to advanced patterns.

## Tech Stack

| Tool                                        | Role                                        |
| ------------------------------------------- | ------------------------------------------- |
| [Vite](https://vitejs.dev/)                 | Build tool & dev server                     |
| [React Router v7](https://reactrouter.com/) | Client-side routing (framework mode)        |
| [GraphQL](https://graphql.org/)             | API query language                          |
| [gql.tada](https://gql-tada.0no.co/)        | Type-safe GraphQL with TypeScript inference |
| [Tailwind CSS](https://tailwindcss.com/)    | Utility-first styling                       |
| [Vitest](https://vitest.dev/)               | Unit & integration testing                  |
| [Storybook](https://storybook.js.org/)      | Component development & documentation       |

## Project Goal

Work through a series of examples — from simple to complex — that demonstrate how these tools fit together in a real-world React application. Each step builds on the previous, introducing new concepts incrementally.

## Learning Path

### Phase 1 — Foundations

- [x] Scaffold the project — see [`docs/scaffolding.md`](docs/scaffolding.md)
- [x] Set up React Router with basic file-based routes
- [x] Wire up a GraphQL API — deployed at `https://react-gql-workshop-api.vercel.app/api`
- [x] Write a first typed query with gql.tada

### Phase 2 — Components & Stories

- [ ] Build data-driven UI components
- [ ] Document each component in Storybook
- [ ] Write unit tests with Vitest + React Testing Library

### Phase 3 — Routing & Data Fetching

- [ ] Route loaders that fetch GraphQL data
- [ ] Loading, error, and empty states
- [ ] URL-driven filtering/search with GraphQL variables

### Phase 4 — Advanced GraphQL

- [ ] Fragments with gql.tada's `FragmentOf` for colocation
- [ ] Mutations and optimistic UI updates
- [ ] Pagination (cursor-based and offset)

## Notes

- The API is a GraphQL Yoga server deployed on Vercel with in-memory mock data — see `apps/api/`.
- gql.tada infers types directly from the schema — no separate code generation step at runtime.
- Stories serve as living documentation and the primary way to develop components in isolation.

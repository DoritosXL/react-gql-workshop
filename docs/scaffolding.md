# Scaffolding Reference

Steps taken to scaffold this project from scratch. Kept here as a reference — the main README covers the current state of the project.

## 1. Create the Vite + React + TypeScript project

```bash
# npm
npm create vite@latest . -- --template react-ts
npm install

# yarn
yarn create vite . --template react-ts
yarn
```

## 2. Upgrade to Yarn Berry (v4)

```bash
yarn set version berry
yarn install
```

## 3. Install React Router

```bash
# npm
npm install react-router

# yarn
yarn add react-router
```

## 4. Install Tailwind CSS

```bash
# npm
npm install -D tailwindcss @tailwindcss/vite

# yarn
yarn add -D tailwindcss @tailwindcss/vite
```

Add the Tailwind Vite plugin to `vite.config.ts`:

```ts
import tailwindcss from '@tailwindcss/vite'

export default {
  plugins: [tailwindcss()],
}
```

Add to `src/index.css`:

```css
@import "tailwindcss";
```

## 5. Install GraphQL + gql.tada

```bash
# npm
npm install gql.tada graphql
npm install -D @0no-co/graphqlsp

# yarn
yarn add gql.tada graphql
yarn add -D @0no-co/graphqlsp
```

Configure `tsconfig.app.json` to enable the TypeScript plugin (use `schema` for a local SDL file or a remote endpoint URL):

```json
{
  "compilerOptions": {
    "plugins": [
      {
        "name": "@0no-co/graphqlsp",
        "schema": "./schema.graphql",
        "tadaOutputLocation": "src/graphql-env.d.ts"
      }
    ]
  }
}
```

Generate `src/graphql-env.d.ts` from the local schema:

```bash
# npm
npx gql-tada generate-output --tsconfig tsconfig.app.json

# yarn
yarn gql-tada generate-output --tsconfig tsconfig.app.json
```

> The `--tsconfig` flag is required because the root `tsconfig.json` uses project references and the CLI won't find the plugin entry without it.

Initialize the tada client in `src/graphql.ts`:

```ts
import { initGraphQLTada } from 'gql.tada'
import type { introspection } from './graphql-env.d.ts'

export const graphql = initGraphQLTada<{ introspection: introspection }>()
```

## 6. Install Vitest + React Testing Library

```bash
# npm
npm install -D vitest @vitest/coverage-v8 jsdom @testing-library/react @testing-library/user-event @testing-library/jest-dom

# yarn
yarn add -D vitest @vitest/coverage-v8 jsdom @testing-library/react @testing-library/user-event @testing-library/jest-dom
```

Import `defineConfig` from `vitest/config` (not `vite`) so the `test` block is typed correctly:

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
})
```

Create `src/test/setup.ts`:

```ts
import '@testing-library/jest-dom'
```

Add to `package.json` scripts:

```json
"test": "vitest",
"test:ui": "vitest --ui",
"coverage": "vitest run --coverage"
```

## 7. Install Storybook

```bash
# npm
npx storybook@latest init

# yarn (v4 Berry)
yarn dlx storybook@latest init
```

Storybook auto-detects Vite and React. Accept the defaults. This adds:
- `.storybook/main.ts` — builder and addon config
- `.storybook/preview.ts` — global decorators/parameters
- `src/stories/` — example stories

Import Tailwind in `.storybook/preview.ts` so styles apply in stories:

```ts
import '../src/index.css'
```

Create `.storybook/tsconfig.json` so the Storybook config files inherit the app's TypeScript settings (including `vite/client` types, which cover CSS imports):

```json
{
  "extends": "../tsconfig.app.json",
  "include": ["*.ts", "*.tsx"]
}
```

> Without this, TypeScript 6's `noUncheckedSideEffectImports` default will flag the CSS import as unknown since `.storybook/` has no explicit tsconfig ownership.

Add to `package.json` scripts:

```json
"storybook": "storybook dev -p 6006",
"build-storybook": "storybook build"
```

# Copilot Agent Instructions for lullaby-dashboard-2

## Summary

This repository is a small static Astro dashboard app called **LaunchPad**. It uses:

- Astro 5 for static site generation
- React 19 for client-side components
- Zustand for state management
- BEM CSS for styling
- Netlify for deployment at the site root

## Supported browsers

The app must support browser from TV with user agent:
Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.3945.79 Safari/537.36 SmartTV/10.0 Colt/2.0

## Project Type and Technology

- Project type: frontend web app / static site
- Languages: TypeScript, JavaScript, Astro, CSS
- Frameworks: Astro, React
- Runtime/build: Node.js, npm
- Key configs:
  - `package.json` for scripts and dependencies
  - `astro.config.mjs` for Astro settings
  - `tsconfig.json` for TypeScript

## Build & Validation Commands

### Bootstrap

Always run this first in the repository root:

```bash
npm install
```

This installs dependencies and ensures `package-lock.json` is respected.

### Build

Confirm the app compiles and produces the static output:

```bash
npm run build
```

Expected result: successful Astro build using the Netlify adapter for deployment at the site root.

### Validating and formatting:

Validate TypeScript correctness:

```bash
npm run ci:ts
```

Validate Eslint rules:

```bash
npm run ci:lint
```

Validate Prettier formatting:

```bash
npm run ci:format
```

### Run Locally

To run the dev server:

```bash
npm run dev
```

Then open:

```text
http://localhost:4321/
```

To preview the built static site after `npm run build`:

```bash
npm run preview
```

## Environment

- Verified working with Node.js `v24.11.1` and npm `11.6.2`.
- Use npm and `package-lock.json` together. Do not switch package managers unless explicitly required.

## Repository Layout

### Root files

- `package.json` — primary scripts and dependencies
- `package-lock.json` — lockfile for npm
- `astro.config.mjs` — Astro config for Netlify deployment at the site root
- `tsconfig.json` — TypeScript config extending `astro/tsconfigs/strict`
- `README.md` — short project description and dev instruction
- deployment output is handled by the Netlify adapter rather than a GitHub Pages `docs/` folder
- `public/` — public static assets
- `src/` — app source code
- `tools/` — utility scripts

### Key source files

- `src/pages/index.astro` — entry page for the dashboard
- `src/components/App.tsx` — main React application component
- `src/stores/useDashboardStore.ts` — main Zustand state store
- `src/types.ts` — data structure types
- `src/styles/main.css` — global styling

### Architecture

- Astro renders the static page in `src/pages/index.astro`
- React components are used for dynamic client-side behavior
- State and logic must be stored in a Zustand hook and persisted through the browser
- React components must be small and representational, hooks should be only used to read state or call Zustand actions
- For each new feature, create new React components and Zustand state/actions as needed, but avoid adding new dependencies or complex logic to existing files
- Firebase must be called only from proxy Astro API routes in `src/pages/api/` and never directly from React components or Zustand stores

## Validation Guidance

When making changes:

1. Run `npm install` if dependencies changed or if the workspace was cleaned.
2. Run `npm run ci:ts` to verify TypeScript.
3. Run `npm run ci:lint` to verify Eslint.
4. Run `npm run ci:format` to verify Prettier.
5. Run `npm run ci:check` to verify Astro.
6. Run `npm run build` to verify the site compiles.
7. If the change is UI-related, optionally run `npm run dev` and inspect locally using Chrome dev tools with the TV user agent.

If anything in these instructions appears incorrect or incomplete, perform a narrow search only for the missing part. Otherwise, trust these instructions and minimize additional repo exploration.

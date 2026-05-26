# Copilot Agent Instructions for lullaby-dashboard-2

## Summary

This repository is a small static Astro dashboard app called **Lullaby Dashboard 2**. It uses:

- Astro 5 for static site generation
- React 19 for client-side components
- Zustand for state management
- Sass for styling
- A JSON configuration file at `public/configuration.json`

The build produces a static site under `docs/` with a base path of `lullaby-dashboard-2`.

## Supported browsers

The app must support browser from TV with user agent: Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.3945.79 Safari/537.36 SmartTV/10.0 Colt/2.0

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

Expected result: successful Astro build and output written to `docs/`.

### Type Checking

Validate TypeScript correctness:

```bash
npm run typecheck
```

This runs `tsc --noEmit`.

### Run Locally

To run the dev server:

```bash
npm run dev
```

Then open:

```text
http://localhost:4322/lullaby-dashboard-2
```

To preview the built static site after `npm run build`:

```bash
npm run preview
```

### Notes

- There is no `lint` script in `package.json`.
- There is no `test` script or built-in test suite in this repo.
- There are no GitHub Actions workflow files in `.github/` currently.
- Use `npm run build` and `npm run typecheck` as the main validation steps.

## Environment

- Verified working with Node.js `v24.11.1` and npm `11.6.2`.
- Use npm and `package-lock.json` together. Do not switch package managers unless explicitly required.

## Repository Layout

### Root files

- `package.json` — primary scripts and dependencies
- `package-lock.json` — lockfile for npm
- `astro.config.mjs` — Astro site config, base path, outDir `./docs`
- `tsconfig.json` — TypeScript config extending `astro/tsconfigs/strict`
- `README.md` — short project description and dev instruction
- `docs/` — built static site output
- `public/` — public static assets
- `src/` — app source code
- `tools/` — utility scripts

### Key source files

- `src/pages/index.astro` — entry page for the dashboard
- `src/components/App.tsx` — main React application component
- `src/components/Clock.tsx` — live clock component
- `src/components/ListSelector.tsx` — routine selector
- `src/components/TodoList.tsx` — task checklist UI
- `src/components/VideoEmbed.tsx` — embedded YouTube video component
- `src/components/DebugOverlay.tsx` — optional debug overlay
- `src/stores/useDashboardStore.ts` — Zustand state store
- `src/types.ts` — data structure types
- `public/configuration.json` — routines and task data
- `src/styles/main.css` — global styling

### Architecture

- Astro renders the static page in `src/pages/index.astro`.
- React components are used for dynamic client-side behavior.
- State is stored in a Zustand hook and persisted through the browser.
- Config data is loaded from `public/configuration.json`.
- The build output is served from `docs/` with base path `lullaby-dashboard-2`.

## Validation Guidance

When making changes:

1. Run `npm install` if dependencies changed or if the workspace was cleaned.
2. Run `npm run build` to verify the site compiles.
3. Run `npm run typecheck` to verify TypeScript.
4. If the change is UI-related, optionally run `npm run dev` and inspect locally.

If anything in these instructions appears incorrect or incomplete, perform a narrow search only for the missing part. Otherwise, trust these instructions and minimize additional repo exploration.

/// <reference types="vite-plugin-svgr/client" />
// @ts-check
import { execSync } from 'node:child_process';
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import svgr from 'vite-plugin-svgr';

import react from '@astrojs/react';

// Build stamp baked into the client bundle (shown in the settings panel). Computed
// once at config load: on Netlify the build runs once so the values are accurate;
// in dev they reflect the dev-server start. Commit prefers Netlify's COMMIT_REF,
// falls back to local git, then 'unknown' when neither is available.
function resolveCommit() {
  if (process.env.COMMIT_REF) {
    return process.env.COMMIT_REF.slice(0, 7);
  }
  try {
    return execSync('git rev-parse --short HEAD').toString().trim();
  } catch {
    return 'unknown';
  }
}

const buildCommit = resolveCommit();
const buildTime = `${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC`;

export default defineConfig({
  integrations: [react()],
  output: 'server',
  adapter: netlify(),
  vite: {
    plugins: [svgr()],
    define: {
      __BUILD_COMMIT__: JSON.stringify(buildCommit),
      __BUILD_TIME__: JSON.stringify(buildTime),
    },
    build: {
      // Down-level client JS/CSS to the TV browser floor (Chrome 87). Keep this
      // engine in sync with the `browserslist` field in package.json.
      target: ['chrome87'],
    },
  },
});

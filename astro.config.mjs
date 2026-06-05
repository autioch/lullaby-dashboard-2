/// <reference types="vite-plugin-svgr/client" />
// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import svgr from "vite-plugin-svgr";

import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  output: 'server',
  adapter: netlify(),
  vite: {
    plugins: [svgr()]
  }
});

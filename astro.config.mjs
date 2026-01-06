// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://autioch.github.io/lullaby-dashboard-2',
  integrations: [react()]
});
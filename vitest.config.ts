import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

// Unit-test layer (Phase 1: logic only). Tests run in Node — they exercise
// store logic, server helpers, and utils, none of which touch the DOM, so the
// Chrome 87 browser floor does not apply here (same as the API routes).
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
    // Dummy values so module-load side effects don't throw in tests:
    // db.ts requires the PUBLIC_FIREBASE_* set, and the session helpers read
    // SESSION_SECRET. Tests that need a specific value override via vi.stubEnv.
    env: {
      SESSION_SECRET: 'test-session-secret',
      PUBLIC_FIREBASE_API_KEY: 'test',
      PUBLIC_FIREBASE_AUTH_DOMAIN: 'test',
      PUBLIC_FIREBASE_PROJECT_ID: 'test',
      PUBLIC_FIREBASE_STORAGE_BUCKET: 'test',
      PUBLIC_FIREBASE_MESSAGING_SENDER_ID: 'test',
      PUBLIC_FIREBASE_APP_ID: 'test',
    },
  },
});

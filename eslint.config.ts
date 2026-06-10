import css from '@eslint/css';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import type { ESLint } from 'eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      // 'sort-imports': ['error'],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  },
  tseslint.configs.recommended,
  // React Hooks correctness rules on the .tsx presentation components. Only the
  // two stable rules are enabled — react-hooks v7 also ships the experimental
  // React Compiler ruleset in its presets, which is intentionally left off.
  // (eslint-plugin-react itself is omitted: 7.37 isn't compatible with ESLint 10
  // yet — it crashes at runtime. Add it once it ships ESLint 10 support.)
  {
    files: ['**/*.{jsx,tsx}'],
    // Cast: react-hooks v7's exported type isn't structurally assignable to
    // ESLint's Plugin type (its `configs` shape), though it works at runtime.
    plugins: { 'react-hooks': reactHooks as unknown as ESLint.Plugin },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/gfm',
    extends: ['markdown/recommended'],
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
  },
]);

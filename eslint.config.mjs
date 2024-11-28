import js from '@eslint/js';
import globals from 'globals'
import tsEslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default tsEslint.config(
  {
    ignores: ['dist/', 'node_modules/'],
  },
  
  {
    extends: [
      ...tsEslint.configs.recommended,
      js.configs.recommended,
      reactPlugin.configs.flat.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      quotes: [2, 'single'],
      semi: ["error", "always"],
      camelcase: 'off',
      'no-async-promise-executor': 1,
      'no-empty': 1,
      "@typescript-eslint/no-explicit-any": 1,
    },
  },
);
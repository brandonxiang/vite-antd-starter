import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tsEslint.config(
  ...tsEslint.configs.recommended,
  {
    ...eslint.configs.recommended, 
    ...reactPlugin.configs.flat.recommended,
    ...eslintPluginPrettierRecommended,
    ignores: ['dist/', 'node_modules/'],
    files: ['src/**/*.{ts,tsx,mts,cts}'],
    plugins: {
      'react-hooks': reactHooksPlugin
    },
    rules: {
      quotes: [2, 'single'],
      semi: ["error", "always"],
      camelcase: 'off',
      'no-async-promise-executor': 1,
      'no-empty': 1,
    },
  },
);
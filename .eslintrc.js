module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/no-empty-interface': 1,
    '@typescript-eslint/ban-types': 1,
    '@typescript-eslint/no-empty-function': 1,
    'no-async-promise-executor': 1,
    'no-empty': 1,
    '@typescript-eslint/no-explicit-any': 1,
  },
};

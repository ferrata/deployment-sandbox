// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution')

const { join } = require('path')

module.exports = {
  root: true,
  ignorePatterns: ['node_modules', 'dist', '.next', '!.*'],
  reportUnusedDisableDirectives: true,
  env: { es6: true },
  parserOptions: {
    ecmaVersion: 2020,
    project: join(process.cwd(), 'tsconfig.json'),
  },
  extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'no-unused-vars': ['warn', { ignoreRestSiblings: true, argsIgnorePattern: 'returns|type|_' }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
        ecmaFeatures: {
          jsx: true,
        },
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      settings: {
        'import/resolver': {
          typescript: true,
          node: true,
        },
      },
      rules: {
        '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
        '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],

        'no-return-await': 'off',
        '@typescript-eslint/return-await': ['error', 'always'],

        // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
        'import/named': 'off',
        'import/namespace': 'off',
        'import/default': 'off',
        'import/no-named-as-default-memner': 'off',
        'import/export': 'off',
      },
    },
    {
      files: ['*.test.js', '__tests__/**/*.js'],
      env: { jest: true },
    },
    { files: ['.*.js', '*.js'], env: { node: true } },
  ],
}

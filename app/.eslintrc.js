module.exports = {
  extends: [
    '@deployment-sandbox',
    '@deployment-sandbox/eslint-config/react',
    '@deployment-sandbox/eslint-config/next',
    '@deployment-sandbox/eslint-config/prettier',
  ],
  env: { browser: true },
  globals: { global: true },
  rules: {
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'no-restricted-globals': ['error', 'document', 'location', 'history', 'screen', 'frames'],
  },
  parserOptions: {
    project: ['tsconfig.json'],
  },
}

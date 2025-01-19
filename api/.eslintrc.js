module.exports = {
  extends: ['@deployment-sandbox', '@deployment-sandbox/eslint-config/prettier'],
  env: { node: true },
  ignorePatterns: ['lib'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: 'returns|type|_' },
    ],
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
  },
  overrides: [
    {
      files: ['src/generated/*'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
}

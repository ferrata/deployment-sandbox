/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error'],
  },
}

module.exports = config

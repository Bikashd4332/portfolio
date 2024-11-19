/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'sznm/react',
    'next/core-web-vitals',
    'plugin:react/jsx-runtime',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'prettier/prettier': 'off',
  },
};
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint', 'react-redux'],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-redux/recommended',
    '@feature-sliced',
    'prettier',
  ],

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },

    'import/resolver': {
      typescript: { alwaysTryTypes: true, project: './' },
    },
  },

  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    camelcase: 'error',
    eqeqeq: 'error',
    'prefer-const': 'error',
    // 'react/react-in-jsx-sxope': 'off',
  },
}

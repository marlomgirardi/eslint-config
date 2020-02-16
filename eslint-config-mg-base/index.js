module.exports = {
  extends: [
    'eslint:recommended',
    ...[
      './rules/best-practices',
      './rules/errors',
      './rules/es6',
      './rules/imports',
      './rules/jsdoc',
      './rules/node',
      './rules/style',
      './rules/variables',
    ].map(require.resolve),
  ],

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },

  rules: {},
};

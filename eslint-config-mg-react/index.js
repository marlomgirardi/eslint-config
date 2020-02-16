module.exports = {
  extends: [
    'eslint-config-mg-base',
    './rules/react',
    './rules/react-hooks',
    './rules/react-a11y',
  ].map(require.resolve),

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },

  rules: {},
};

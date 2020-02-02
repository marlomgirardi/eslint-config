module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-mg-base',
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-hooks',
    'eslint-config-airbnb/rules/react-a11y',

    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },

  rules: {},
};

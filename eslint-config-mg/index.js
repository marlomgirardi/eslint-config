module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-mg-base',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),

  rules: {},
};
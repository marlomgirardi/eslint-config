module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/jsdoc',
    './rules/node',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),

  rules: {},
};

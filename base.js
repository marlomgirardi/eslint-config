module.exports = {
  extends: [
    "eslint:recommended",
    ...[
      "./rules/base/best-practices",
      "./rules/base/errors",
      "./rules/base/es6",
      "./rules/base/imports",
      "./rules/base/jsdoc",
      "./rules/base/node",
      "./rules/base/style",
      "./rules/base/variables",
    ].map(require.resolve),
  ],

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },

  rules: {},
};

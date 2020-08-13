module.exports = {
  extends: [
    "./rules/react/react",
    "./rules/react/react-hooks",
    "./rules/react/react-a11y",
  ].map(require.resolve),

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },

  rules: {},
};

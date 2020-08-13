module.exports = {
  plugins: ["react-hooks"],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    // Enforce Rules of Hooks
    // https://github.com/facebook/react/blob/fe19b4247b97c20b4c6af92c022fcfccb45e3148/packages/eslint-plugin-react-hooks/src/RulesOfHooks.js
    "react-hooks/rules-of-hooks": "error",

    // Verify the list of the dependencies for Hooks like useEffect and similar
    // https://github.com/facebook/react/blob/fe19b4247b97c20b4c6af92c022fcfccb45e3148/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js
    "react-hooks/exhaustive-deps": "error",
  },
};

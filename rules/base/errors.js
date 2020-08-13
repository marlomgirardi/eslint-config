module.exports = {
  rules: {
    // Disallow await inside of loops
    "no-await-in-loop": "error",

    // Disallow assignment in conditional expressions
    "no-cond-assign": ["error", "always"],

    // Disallow use of console
    "no-console": "warn",

    // Disallow assigning to imported bindings
    "no-import-assign": "error",

    // Disallow returning values from setters
    "no-setter-return": "error",

    // Disallow template literal placeholder syntax in regular strings
    "no-template-curly-in-string": "error",

    // Disallow assignments that can lead to race conditions due to usage of await or yield
    "require-atomic-updates": "error",
  },
};

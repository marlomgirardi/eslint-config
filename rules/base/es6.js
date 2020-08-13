module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
      globalReturn: false,
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },

  rules: {
    // Enforces no braces where they can be omitted
    "arrow-body-style": "error",

    // Require parens in arrow function arguments
    "arrow-parens": "error",

    // Require space before/after arrow function's arrow
    "arrow-spacing": "error",

    // Verify super() callings in constructors
    "constructor-super": "error",

    // Enforce the spacing around the * in generator functions
    "generator-star-spacing": ["error", "after"],

    // Disallow arrow functions where they could be confused with comparisons
    "no-confusing-arrow": "error",

    // Disallow importing from the same path more than once
    // Using eslint-plugin-import
    "no-duplicate-imports": "off",

    // Disallow useless computed property keys
    "no-useless-computed-key": "error",

    // Disallow unnecessary constructor
    "no-useless-constructor": "error",

    // Disallow renaming import, export, and destructured assignments to the same name
    "no-useless-rename": "error",

    // Require let or const instead of var
    "no-var": "error",

    // Require method and property shorthand syntax for object literals
    "object-shorthand": ["error", "always", {
      avoidQuotes: true,
    }],

    // Suggest using arrow functions as callbacks
    "prefer-arrow-callback": "error",

    // Suggest using of const declaration for variables that are never modified after declared
    "prefer-const": "error",

    // Prefer destructuring from arrays and objects
    "prefer-destructuring": ["error", {
      AssignmentExpression: {
        array: true,
        object: false,
      },
    }],

    // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
    "prefer-numeric-literals": "error",

    // Use rest parameters instead of arguments
    "prefer-rest-params": "error",

    // Suggest using the spread operator instead of .apply()
    "prefer-spread": "error",

    // Suggest using template literals instead of string concatenation
    "prefer-template": "error",

    // Enforce spacing between object rest-spread
    "rest-spread-spacing": "error",

    // Require a Symbol description
    "symbol-description": "error",

    // Enforce usage of spacing in template strings
    "template-curly-spacing": "error",

    // Enforce spacing around the * in yield* expressions
    "yield-star-spacing": ["error", "after"],
  },
};

module.exports = {
  rules: {
    // Enforce line breaks after opening and before closing array brackets
    // TODO: review on airbnb-base next major
    'array-bracket-newline': ['error', 'consistent'],

    // Enforce line breaks between array elements
    // airbnb: ['off', { multiline: true, minItems: 3 }]
    'array-element-newline': ['error', 'consistent'],

    // If ESLint decides that the variable is a constant (all uppercase), then no warning will be thrown.
    // airbnb: ['error', { properties: 'never' }]
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],

    // Enforce or disallow capitalization of the first letter of a comment
    // airbnb: off
    'capitalized-comments': [
      'warn',
      'always',
      {
        line: {
          ignoreConsecutiveComments: true,
        },
        block: {
          ignoreConsecutiveComments: true,
        },
      },
    ],

    // Require function expressions to have a name
    // airbnb: 'warn'
    'func-names': ['warn', 'as-needed'],

    // Enforces use of function declarations or expressions
    // airbnb: off
    'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],

    // Enforce position of line comments
    // airbnb: off
    'line-comment-position': [
      'error',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultIgnorePatterns: true,
      },
    ],

    // Enforce empty lines around comments
    // airbnb: off
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        beforeLineComment: true,
        allowBlockStart: true,
        allowArrayStart: true,
        allowObjectStart: true,
        allowObjectEnd: true,
      },
    ],

    // Specify the maximum depth that blocks can be nested
    // airbnb: off
    'max-depth': ['error', 4],

    // Specify the maximum length of a line
    // airbnb: ['error', 100, 2, ...]
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // Specify the max number of lines in a file
    // airbnb: off
    'max-lines': [
      'warn',
      {
        max: 500,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // Enforce a maximum function length
    // airbnb: off
    'max-lines-per-function': [
      'warn',
      {
        max: 250,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // Prefer use of an object spread over Object.assign
    // TODO: review on airbnb-base next major
    'prefer-object-spread': 'warn',

    // Enforce or disallow newlines between operands of ternary expressions
    // airbnb: off
    'multiline-ternary': ['error', 'always-multiline'],

    // Enforce a maximum number of statements allowed per line
    // airbnb: off
    'max-statements-per-line': ['error', { max: 1 }],

    // Enforce a maximum depth that callbacks can be nested
    // airbnb: off
    'max-nested-callbacks': ['error', 3],
  },
};

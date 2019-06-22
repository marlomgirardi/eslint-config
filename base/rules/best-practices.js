module.exports = {
  // Airbnb uses many roles that I use
  extends: 'airbnb-base',

  rules: {
    // Controls location of "use strict"; directives
    strict: ['error', 'function'],

    // Specify the maximum cyclomatic complexity allowed in a program
    // airbnb: ['error', 11]
    complexity: ['error', 10],

    // Require return statements to either always or never specify values
    // airbnb: error
    'consistent-return': 'warn',

    // Enforce a maximum number of classes per file
    // TODO: review on airbnb-base next major
    'max-classes-per-file': ['error', 1],

    // Disallow return before else
    // airbnb: ['error', { allowElseIf: false }]
    'no-else-return': 'warn',

    // Disallow self assignment
    // TODO: review on airbnb-base next major
    'no-self-assign': ['error'],

    // Disallow unnecessary catch clauses
    // TODO: review on airbnb-base next major
    'no-useless-catch': ['error'],

    // Disallow providing the 10 radix
    // airbnb: error
    radix: ['warn', 'as-needed'],
  },
};

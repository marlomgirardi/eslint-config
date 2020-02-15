module.exports = {
  rules: {
    // Specify the maximum cyclomatic complexity allowed in a program
    // airbnb: ['off', 11]
    complexity: ['error', 10],

    // Require return statements to either always or never specify values
    // airbnb: error
    'consistent-return': 'warn',

    // Disallow return before else
    // airbnb: ['error', { allowElseIf: false }]
    'no-else-return': 'warn',

    // Disallow providing the 10 radix
    // airbnb: error
    radix: ['warn', 'as-needed'],
  },
};

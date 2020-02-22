module.exports = {
  plugins: ['jsdoc'],

  extends: ['plugin:jsdoc/recommended'],

  rules: {
    // Reports invalid padding inside JSDoc block
    'jsdoc/check-indentation': 'warn',

    // Reports against Google Closure Compiler syntax
    'jsdoc/check-syntax': 'warn',

    // Sentences should start with capitalized letter and ends with a dot
    'jsdoc/require-description-complete-sentence': ['warn', {
      abbreviations: [],
    }],

    // Requires that all functions have a description
    'jsdoc/require-description': ['warn', {
      contexts: ['ClassDeclaration', 'ClassExpression'],
      exemptedBy: ['type'],
      descriptionStyle: 'body',
    }],

    // Requires a hyphen before the @param description
    'jsdoc/require-hyphen-before-param-description': ['warn', 'never'],
  },
};

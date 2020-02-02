module.exports = {
  plugins: ['jsdoc'],

  rules: {
    // The jsdoc/recommended as error instead of warning
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-types': 'error',
    'jsdoc/implements-on-classes': 'error',
    'jsdoc/newline-after-description': 'error',
    'jsdoc/no-undefined-types': 'error',
    'jsdoc/require-jsdoc': 'error',
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-returns': 'error',
    'jsdoc/require-returns-check': 'error',
    'jsdoc/require-returns-description': 'error',
    'jsdoc/require-returns-type': 'error',
    'jsdoc/valid-types': 'error',

    // Reports invalid padding inside JSDoc block
    'jsdoc/check-indentation': 'error',

    // Reports against Google Closure Compiler syntax
    'jsdoc/check-syntax': 'error',

    // Sentences should start with capitalized letter and ends with a dot
    'jsdoc/require-description-complete-sentence': ['warn', {
      abbreviations: [],
    }],

    // Requires that all functions have a description
    'jsdoc/require-description': ['error', {
      contexts: ['ClassDeclaration', 'ClassExpression'],
      exemptedBy: ['type'],
      descriptionStyle: 'body',
    }],

    // Requires a hyphen before the @param description
    'jsdoc/require-hyphen-before-param-description': ['error', 'never'],
  },
};

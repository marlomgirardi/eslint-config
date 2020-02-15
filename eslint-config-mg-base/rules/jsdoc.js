module.exports = {
  plugins: ['jsdoc'],

  rules: {
    // Reports invalid alignment of JSDoc block asterisks
    'jsdoc/check-alignment': 'error',

    // Reports invalid padding inside JSDoc block
    'jsdoc/check-indentation': 'error',

    // Must match with the exact signature
    'jsdoc/check-param-names': 'error',

    // Reports against Google Closure Compiler syntax
    'jsdoc/check-syntax': 'error',

    // Prevent invalid tag name like `@paramm`
    'jsdoc/check-tag-names': 'error',

    // Prefer native types over objects
    'jsdoc/check-types': 'error',

    // Reports an issue with any non-constructor function using @implements
    'jsdoc/implements-on-classes': 'error',

    // Enforces a consistent padding of the block description
    'jsdoc/newline-after-description': ['warn', 'always'],

    // Prevent invalid type
    'jsdoc/no-undefined-types': 'error',

    // Sentences should start with capitalized letter and ends with a dot
    'jsdoc/require-description-complete-sentence': 'warn',

    // Requires that all functions have a description
    'jsdoc/require-description': ['error', {
      contexts: ['ClassDeclaration', 'ClassExpression'],
      exemptedBy: ['type'],
      descriptionStyle: 'body',
    }],

    // Requires a hyphen before the @param description
    'jsdoc/require-hyphen-before-param-description': ['error', 'never'],

    // Requires that all function parameters are documented
    'jsdoc/require-param': 'error',

    // Requires that all function parameters have name
    'jsdoc/require-param-name': 'error',

    // Requires that @param tag has type value
    'jsdoc/require-param-type': 'error',

    // Requires returns are documented
    'jsdoc/require-returns': 'error',

    // Requires that @returns tag has type value
    'jsdoc/require-returns-type': 'error',

    // Checks if the return expression exists in function body and in the comment
    'jsdoc/require-returns-check': 'error',

    // Requires all types to be valid JSDoc or Closure compiler types without syntax errors
    'jsdoc/valid-types': 'error',
  },
};

module.exports = {
  parser: 'babel-eslint',

  extends: [require.resolve('./index')],

  plugins: ['babel'],

  rules: {

    // Require a capital letter for constructors
    // Babel: Ignores capitalized decorators (@Decorator)
    'new-cap': 'off',
    'babel/new-cap': ['error', {
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    // Require camel case names
    // Babel: doesn't complain about optional chaining (var foo = bar?.a_b;`)
    camelcase: 'off',
    'babel/camelcase': ['error', { properties: 'never' }],

    // Disallow this keywords outside of classes or class-like objects
    // Babel: doesn't fail when inside class properties (class A { a = this.b; })
    'no-invalid-this': 'off',
    'babel/no-invalid-this': 'error',


    // Require padding inside curly braces
    // Babel: doesn't complain about export x from "mod"; or export * as x from "mod";
    'object-curly-spacing': 'off',
    'babel/object-curly-spacing': ['error', 'always'],


    // Specify whether double or single quotes should be used
    // Babel: doesn't complain about JSX fragment shorthand syntax (<>foo</>;)
    quotes: 'off',
    'babel/quotes': ['error', 'single', { avoidEscape: true }],

    // Require or disallow use of semicolons instead of ASI
    // Babel: doesn't fail when using for await (let something of {}). Includes class properties
    semi: 'off',
    'babel/semi': 'error',

    // Disallow usage of expressions in statement position
    // Babel: doesn't fail when using do expressions or optional chaining (a?.b()).
    'no-unused-expressions': 'off',
    'babel/no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    }],
  },
};

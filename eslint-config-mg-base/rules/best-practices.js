module.exports = {
  rules: {
    // Enforces return statements in callbacks of array's methods
    'array-callback-return': ['error', { allowImplicit: true }],

    // Treat var statements as if they were block scoped
    'block-scoped-var': 'error',

    // Specify the maximum cyclomatic complexity allowed in a program
    complexity: ['warn', 10],

    // Enforce that class methods use "this"
    'class-methods-use-this': ['error', {
      exceptMethods: [],
    }],

    // Require return statements to either always or never specify values
    'consistent-return': 'warn',

    // Specify curly brace conventions for all control statements
    curly: ['error', 'multi-line'], // Multiline

    // require default case in switch statements
    'default-case': ['error', { commentPattern: '^no default$' }],

    // Enforce default parameters to be last
    'default-param-last': 'error',

    // Encourages use of dot notation whenever possible
    'dot-notation': ['error', { allowKeywords: true }],

    // Enforces consistent newlines before or after dots
    // https://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],

    // Require the use of === and !==
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // Require grouped accessor pairs in object literals and classes
    'grouped-accessor-pairs': 'error',

    // Make sure for-in loops have an if statement
    'guard-for-in': 'error',

    // Enforce a maximum number of classes per file
    'max-classes-per-file': ['error', 1],

    // Disallow the use of alert, confirm, and prompt
    'no-alert': 'warn',

    // Disallow use of arguments.caller or arguments.callee
    'no-caller': 'error',

    // Disallow returning value in constructor
    'no-constructor-return': 'error',

    // Disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 'warn',

    // Disallow else after a return in an if
    'no-else-return': ['warn', { allowElseIf: false }],

    // Disallow empty functions, except for standalone funcs/arrows
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ],
    }],

    // Disallow use of eval()
    'no-eval': 'error',

    // Disallow adding to native types
    'no-extend-native': 'error',

    // Disallow unnecessary function binding
    'no-extra-bind': 'error',

    // Disallow Unnecessary Labels
    'no-extra-label': 'error',

    // Disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'error',

    // Disallow implicit type conversions
    'no-implicit-coercion': ['off', {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],

    // Disallow var and named functions in global scope
    'no-implicit-globals': 'warn',

    // Disallow use of eval()-like methods
    'no-implied-eval': 'error',

    // Disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'error',

    // Disallow usage of __iterator__ property
    'no-iterator': 'error',

    // Disallow use of labels for anything other then loops and switches
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // Disallow unnecessary nested blocks
    'no-lone-blocks': 'error',

    // Disallow creation of functions within loops
    'no-loop-func': 'error',

    // Disallow magic numbers
    'no-magic-numbers': ['error', {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],

    // Disallow use of multiple spaces
    'no-multi-spaces': ['error', {
      ignoreEOLComments: false,
    }],

    // Disallow use of multiline strings
    'no-multi-str': 'error',

    // Disallow use of new operator when not part of the assignment or comparison
    'no-new': 'error',

    // Disallow use of new operator for Function object
    'no-new-func': 'error',

    // Disallows creating new instances of String, Number, and Boolean
    'no-new-wrappers': 'error',

    // Disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape': 'error',

    // Disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // For reduce accumulators
        'accumulator', // For reduce accumulators
        'e', // For e.returnvalue
        'ctx', // For Koa routing
        'req', // For Express requests
        'request', // For Express requests
        'res', // For Express responses
        'response', // For Express responses
        '$scope', // For Angular 1 scopes
        'staticContext', // For ReactRouter context
      ],
    }],

    // Disallow usage of __proto__ property
    'no-proto': 'error',

    // Disallow certain object properties
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    }],

    // Disallow use of assignment in return statement
    'no-return-assign': ['error', 'always'],

    // Disallow redundant `return await`
    'no-return-await': 'error',

    // Disallow use of `javascript:` urls.
    'no-script-url': 'error',

    // Disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',

    // Disallow use of comma operator
    'no-sequences': 'error',

    // Restrict what can be thrown as an exception
    'no-throw-literal': 'error',

    // Disallow usage of expressions in statement position
    'no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    }],

    // Disallow useless string concatenation
    'no-useless-concat': 'error',

    // Disallow redundant return; keywords
    'no-useless-return': 'error',

    // Disallow use of void operator
    'no-void': 'error',

    // Disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': ['warn', { terms: ['todo', 'fixme'], location: 'start' }],

    // Require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    'prefer-regex-literals': 'warn',

    // Require use of the second argument for parseInt()
    radix: ['warn', 'as-needed'],

    // Require `await` in `async function` (note: this is a horrible rule that should never be used)
    'require-await': 'warn',

    // Require immediate function invocation to be wrapped in parentheses
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

    // Require or disallow Yoda conditions
    yoda: 'error',
  },
};

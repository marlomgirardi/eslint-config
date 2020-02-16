module.exports = {
  rules: {
    // Enforce line breaks after opening and before closing array brackets
    'array-bracket-newline': ['error', 'consistent'],

    // Enforce spacing inside array brackets
    'array-bracket-spacing': 'error',

    // Enforce line breaks between array elements
    'array-element-newline': ['error', 'consistent'],

    // Enforce spacing inside single-line blocks
    'block-spacing': 'error',

    // Enforce one true brace style
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // Require camel case names
    camelcase: ['error', { properties: 'never' }],

    // Enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': ['warn', 'always', {
      line: {
        ignoreConsecutiveComments: true,
      },
      block: {
        ignoreConsecutiveComments: true,
      },
    }],

    // Require trailing commas in multiline object literals
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],

    // Enforce spacing before and after comma
    'comma-spacing': 'error',

    // Enforce one true comma style
    'comma-style': ['error', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    }],

    // Disallow padding inside computed properties
    'computed-property-spacing': 'error',

    // Enforce newline at the end of file, with no multiple empty lines
    'eol-last': ['error', 'always'],

    // Enforce spacing between functions and their invocations
    'func-call-spacing': 'error',

    // Require or disallow named function expressions
    'func-names': ['warn', 'as-needed'],

    // Enforces use of function declarations or expressions
    'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],

    // Enforce line breaks between arguments of a function call
    'function-call-argument-newline': ['error', 'consistent'],

    // Enforce consistent line breaks inside function parentheses
    'function-paren-newline': 'error',

    // Enforce the location of arrow function bodies with implicit returns
    'implicit-arrow-linebreak': ['error', 'beside'],

    // This option sets a specific tab width for your code
    indent: ['error', 2, {
      SwitchCase: 1,

      // List derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.ts
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
    }],

    // Enforces spacing between keys and values in object literal properties
    'key-spacing': 'error',

    // Require a space before & after certain keywords
    'keyword-spacing': 'error',

    // Disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': 'error',

    // Enforces empty lines around comments
    'lines-around-comment': ['error', {
      beforeLineComment: true,
      allowBlockStart: true,
      allowArrayStart: true,
      allowObjectStart: true,
    }],

    // Require or disallow an empty line between class members
    'lines-between-class-members': 'error',

    // Require or disallow newlines around directives
    // https://eslint.org/docs/rules/lines-around-directive
    'lines-around-directive': ['error', {
      before: 'always',
      after: 'always',
    }],

    // Specify the maximum depth that blocks can be nested
    'max-depth': ['warn', 6],

    // Specify the maximum length of a line in your program
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // Specify the max number of lines in a file
    'max-lines': ['warn', {
      max: 500,
      skipBlankLines: true,
      skipComments: true,
    }],

    // Enforce a maximum function length
    'max-lines-per-function': ['warn', {
      max: 250,
      skipBlankLines: true,
      skipComments: true,
    }],

    // Enforce a maximum number of statements allowed per line
    'max-statements-per-line': ['error', { max: 1 }],

    // Enforce or disallow newlines between operands of ternary expressions
    'multiline-ternary': ['error', 'always-multiline'],

    // Require a capital letter for constructors
    'new-cap': ['error', {
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    // Disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 'error',

    // Require a newline after each call in a method chain
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // Disallow use of the Array constructor
    'no-array-constructor': 'error',

    // Disallow use of bitwise operators
    'no-bitwise': 'error',

    // Disallow use of the continue statement
    'no-continue': 'error',

    // Disallow if as the only statement in an else block
    'no-lonely-if': 'error',

    // Disallow mixes of different operators
    'no-mixed-operators': ['error', {
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['/', '*'],
        ['&', '|', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!=='],
        ['&&', '||'],
      ],
      allowSamePrecedence: false,
    }],

    // Disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',

    // Disallow use of chained assignment expressions
    'no-multi-assign': 'error',

    // Disallow multiple empty lines
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1, maxEOF: 0 }],

    // Disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // Disallow use of the Object constructor
    'no-new-object': 'error',

    // Disallow use of unary operators, ++ and --
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // Disallow certain syntax forms
    'no-restricted-syntax': ['error', {
      selector: 'ForInStatement',
      message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    }, {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      }, {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      }, {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      }],

    // Disallow tab characters entirely
    'no-tabs': 'error',

    // Disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',

    // Disallow dangling underscores in identifiers
    'no-underscore-dangle': ['error', {
      enforceInMethodNames: true,
    }],

    // Disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // Disallow whitespace before properties
    'no-whitespace-before-property': 'error',

    // Enforce the location of single-line statements
    'nonblock-statement-body-position': 'error',

    // Enforce line breaks between braces
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],

    // Require padding inside curly braces
    'object-curly-spacing': ['error', 'always'],

    // Enforce placing object properties on separate lines
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],

    // Enforce variables to be declared either together or separately in functions
    'one-var': ['error', 'never'],

    // Require a newline around variable declaration
    'one-var-declaration-per-line': ['error', 'initializations'],

    // Require or disallow assignment operator shorthand where possible
    'operator-assignment': 'error',

    // Enforce consistent linebreak style for operators
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

    // Disallow padding within blocks
    'padded-blocks': ['error', {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    }, {
        allowSingleLineBlocks: true,
      }],

    // Disallow the use of Math.pow in favor of the ** operator
    'prefer-exponentiation-operator': 'error',

    // Prefer use of an object spread over Object.assign
    'prefer-object-spread': 'error',

    // Require quotes around object literal property names
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    // Specify whether double or single quotes should be used
    quotes: ['error', 'single', { avoidEscape: true }],

    // Require or disallow use of semicolons instead of ASI
    semi: 'error',

    // Enforce spacing before and after semicolons
    'semi-spacing': 'error',

    // Enforce location of semicolons
    'semi-style': 'error',

    // Require or disallow space before blocks
    'space-before-blocks': 'error',

    // Require or disallow space before function opening parenthesis
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],

    // Require or disallow spaces inside parentheses
    'space-in-parens': 'error',

    // Require spaces around operators
    'space-infix-ops': 'error',

    // Require or disallow spaces before/after unary operators
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
    }],

    // Require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // Space here to support sprockets directives
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!', ':', '::'], // Space here to support sprockets directives and flow comment types
        balanced: true,
      },
    }],

    // Enforce spacing around colons of switch statements
    'switch-colon-spacing': 'error',

    // Require or disallow spacing between template tags and their literals
    'template-tag-spacing': 'error',

    // Require or disallow the Unicode Byte Order Mark
    'unicode-bom': 'error',

    // Disallow space between function identifier and application
    'no-spaced-func': 'error',
  },
};

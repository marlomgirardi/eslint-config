const baseStyleRules = require('eslint-config-mg-base/rules/style').rules;

const dangleRules = baseStyleRules['no-underscore-dangle'];

module.exports = {
  plugins: ['react'],

  extends: 'plugin:react/recommended',

  parserOptions: { ecmaFeatures: { jsx: true } },

  rules: {
    'no-underscore-dangle': [
      dangleRules[0],
      {
        ...dangleRules[1],
        allow: [...dangleRules[1].allow, '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
      },
    ],

    // Specify double quotes should be used in JSX attributes
    'jsx-quotes': ['error', 'prefer-double'],

    // Forbid certain propTypes (any, array, object)
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any', 'array', 'object'],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],

    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': ['error', 'never'],

    // Validate closing bracket location in JSX
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

    // Validate closing tag location in JSX
    'react/jsx-closing-tag-location': 'error',

    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],

    // Enforce event handler naming conventions in JSX
    'react/jsx-handler-names': ['error', { eventHandlerPrefix: 'handle', eventHandlerPropPrefix: 'on' }],

    // Validate props indentation in JSX
    'react/jsx-indent-props': ['error', 2],

    // Limit maximum of props on a single line in JSX
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],

    // Prevent usage of .bind() in JSX props
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true,
      },
    ],

    // Prevent duplicate properties in JSX
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

    // Enforce PascalCase for user-defined JSX components (react/jsx-pascal-case)
    'react/jsx-pascal-case': 'error',

    // Prevent usage of dangerous JSX properties
    'react/no-danger': 'warn',

    // Prevent usage of setState in componentDidUpdate,
    'react/no-did-update-set-state': 'error',

    // Prevent usage of setState in componentWillUpdate
    'react/no-will-update-set-state': 'error',

    // Prevent multiple component definition per file
    'react/no-multi-comp': ['error', { ignoreStateless: true }],

    // Enforce ES6 class for React Components
    'react/prefer-es6-class': ['error', 'always'],

    // Require stateless functions when not using lifecycle methods, setState or ref
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],

    // Prevent extra closing tags for components without children
    'react/self-closing-comp': 'error',

    // Enforce our component methods order
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          'event-handlers',
          'getters',
          'setters',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          'event-handlers': ['/^_?(on|handle).+$/'],
          rendering: ['/^_?render.+$/', 'render'],
        },
      },
    ],

    // Prevent missing parentheses around multiline JSX
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],

    // Require that the first prop in a JSX element be on a new line when the element is multiline
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

    // Enforce or disallow spaces around equal signs in JSX attributes
    'react/jsx-equals-spacing': ['error', 'never'],

    // Validate JSX indentation
    'react/jsx-indent': ['error', 2],

    // Only .jsx files may have JSX
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],

    // Prevent definitions of unused prop types
    'react/no-unused-prop-types': 'error',

    // Enforce style prop value being an object
    'react/style-prop-object': 'error',

    // Validate whitespace in and around the JSX opening and closing brackets
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],

    // Prevent usage of Array index in keys
    'react/no-array-index-key': 'error',

    // Enforce a defaultProps definition for every prop that is not a required prop
    'react/require-default-props': [
      'error',
      {
        forbidDefaultForRequired: true,
      },
    ],

    // Forbids using non-exported propTypes
    'react/forbid-foreign-prop-types': ['error', { allowInPropTypes: true }],

    // Prevent void DOM elements from receiving children
    'react/void-dom-elements-no-children': 'error',

    // Enforce all defaultProps have a corresponding non-required PropType
    'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],

    // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    'react/no-redundant-should-component-update': 'error',

    // Prevent unused state values
    'react/no-unused-state': 'error',

    // Prevents common casing typos
    'react/no-typos': 'error',

    // One JSX Element Per Line
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],

    // Enforce consistent usage of destructuring assignment of props, state, and context
    'react/destructuring-assignment': ['error', 'always'],

    // Prevent using this.state within a this.setState
    'react/no-access-state-in-setstate': 'error',

    // Prevent this from being used in stateless functional components
    'react/no-this-in-sfc': 'error',

    // Disallow multiple spaces between inline JSX props
    'react/jsx-props-no-multi-spaces': 'error',
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
    },
    react: {
      pragma: 'React',
      version: '16.0',
    },
  },
};

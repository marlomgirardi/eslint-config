const dangleRules = require("../base/style").rules["no-underscore-dangle"];

module.exports = {
  plugins: ["react"],

  extends: ["plugin:react/recommended"],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  // View link below for react rules documentation
  // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
  rules: {
    "no-underscore-dangle": [dangleRules[0], {
      ...dangleRules[1],
      allow: [...(dangleRules[1].allow || []), "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"],
    }],

    // Specify whether double or single quotes should be used in JSX attributes
    "jsx-quotes": ["error", "prefer-double"],

    "class-methods-use-this": ["error", {
      exceptMethods: [
        "render",
        "getInitialState",
        "getDefaultProps",
        "getChildContext",
        "componentWillMount",
        "componentDidMount",
        "componentWillReceiveProps",
        "shouldComponentUpdate",
        "componentWillUpdate",
        "componentDidUpdate",
        "componentWillUnmount",
        "componentDidCatch",
        "getSnapshotBeforeUpdate",
      ],
    }],

    // Enforces consistent naming for boolean props
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/boolean-prop-naming.md
    "react/boolean-prop-naming": ["warn", {
      propTypeNames: ["bool", "mutuallyExclusiveTrueProps"],
      rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+",
      message: "Boolean property must use `is` or `has` as prefix.",
    }],

    // Enforce all defaultProps have a corresponding non-required PropType
    // https://github.com/yannickcr/eslint-plugin-react/blob/9e13ae2c51e44872b45cc15bf1ac3a72105bdd0e/docs/rules/default-props-match-prop-types.md
    "react/default-props-match-prop-types": ["error", { allowRequiredDefaults: false }],

    // Forbids using non-exported propTypes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
    // this is intentionally set to "warn". it would be "error",
    // but it's only critical if you're stripping propTypes in production.
    "react/forbid-foreign-prop-types": ["warn", { allowInPropTypes: true }],

    // Forbid certain propTypes (any, array, object)
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/forbid-prop-types.md
    "react/forbid-prop-types": ["error", {
      forbid: ["any", "array", "object"],
      checkContextTypes: true,
      checkChildContextTypes: true,
    }],

    // Enforce a specific function type for function components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    "react/function-component-definition": ["off", {
      namedComponents: "function-expression",
      unnamedComponents: "function-expression",
    }],

    // Prevent using this.state within a this.setState
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/no-access-state-in-setstate.md
    "react/no-access-state-in-setstate": "error",

    // Prevent usage of Array index in keys
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    "react/no-array-index-key": "error",

    // Prevent usage of dangerous JSX properties
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    "react/no-danger": "warn",

    // Prevent usage of setState in componentDidUpdate
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    "react/no-did-update-set-state": "error",

    // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    // https://github.com/yannickcr/eslint-plugin-react/blob/9e13ae2c51e44872b45cc15bf1ac3a72105bdd0e/docs/rules/no-redundant-should-component-update.md
    "react/no-redundant-should-component-update": "error",

    // Prevent this from being used in stateless functional components
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/no-this-in-sfc.md
    "react/no-this-in-sfc": "error",

    // Prevents common casing typos
    // https://github.com/yannickcr/eslint-plugin-react/blob/73abadb697034b5ccb514d79fb4689836fe61f91/docs/rules/no-typos.md
    "react/no-typos": "error",

    // Prevent usage of UNSAFE_ methods
    // https://github.com/yannickcr/eslint-plugin-react/blob/157cc932be2cfaa56b3f5b45df6f6d4322a2f660/docs/rules/no-unsafe.md
    "react/no-unsafe": "error",

    // Prevent unused propType definitions
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    "react/no-unused-prop-types": "error",

    // Prevent unused state values
    // https://github.com/yannickcr/eslint-plugin-react/pull/1103/
    "react/no-unused-state": "error",

    // Prevent usage of setState in componentWillUpdate
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
    "react/no-will-update-set-state": "error",

    // Require ES6 class declarations over React.createClass
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    "react/prefer-es6-class": ["error", "always"],

    // Require stateless functions when not using lifecycle methods, setState or ref
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    "react/prefer-stateless-function": ["error", { ignorePureComponents: true }],

    // Enforce a defaultProps definition for every prop that is not a required prop
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/require-default-props.md
    "react/require-default-props": ["error", {
      forbidDefaultForRequired: true,
    }],

    // Prevent extra closing tags for components without children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    "react/self-closing-comp": "error",

    // Enforce component methods order
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/sort-comp.md
    "react/sort-comp": ["error", {
      order: [
        "static-variables",
        "static-methods",
        "instance-variables",
        "lifecycle",
        "event-handlers",
        "getters",
        "setters",
        "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
        "instance-methods",
        "everything-else",
        "rendering",
      ],
      groups: {
        "event-handlers": ["/^_?handle.+$/"],
        rendering: ["/^_?render.+$/", "render"],
      },
    }],

    // Enforce state initialization style
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
    "react/state-in-constructor": ["error", "never"],

    // Enforces where React component static properties should be positioned
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
    "react/static-property-placement": "error",

    // Require style prop value be an object or var
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    "react/style-prop-object": "error",

    // Prevent void DOM elements from receiving children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    "react/void-dom-elements-no-children": "error",

    // Enforce boolean attributes notation in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    "react/jsx-boolean-value": "error",

    // Validate closing bracket location in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],

    // Validate closing tag location in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
    "react/jsx-closing-tag-location": "error",

    // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],

    // Enforce linebreaks in curly braces in JSX attributes and expressions.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
    "react/jsx-curly-newline": ["error", {
      multiline: "consistent",
      singleline: "consistent",
    }],

    // Enforce or disallow spaces inside of curly braces in JSX attributes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    "react/jsx-curly-spacing": ["error", "never", { allowMultiline: true }],

    // Enforce spacing around jsx equals signs
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    "react/jsx-equals-spacing": ["error", "never"],

    // Only .jsx files may have JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    "react/jsx-filename-extension": ["error", { extensions: [".jsx"] }],

    // Require that the first prop in a JSX element be on a new line when the element is multiline
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],

    // Enforce shorthand or standard form for React fragments
    // https://github.com/yannickcr/eslint-plugin-react/blob/bc976b837abeab1dffd90ac6168b746a83fc83cc/docs/rules/jsx-fragments.md
    "react/jsx-fragments": ["error", "syntax"],

    // Enforce event handler naming conventions in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    "react/jsx-handler-names": "error",

    // Enforce JSX indentation
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    "react/jsx-indent": ["error", 2],

    // Validate props indentation in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    "react/jsx-indent-props": ["error", 2],

    // Limit maximum of props on a single line in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    "react/jsx-max-props-per-line": ["error", { maximum: 1, when: "multiline" }],

    // Prevent usage of .bind() in JSX props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    "react/jsx-no-bind": ["error", {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true,
    }],

    // Prevent duplicate props in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    "react/jsx-no-duplicate-props": ["error", { ignoreCase: true }],

    // Prevent usage of `javascript:` URLs
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
    "react/jsx-no-script-url": ["error", [
      {
        name: "Link",
        props: ["to"],
      },
    ]],

    // Disallow unnecessary fragments
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
    "react/jsx-no-useless-fragment": "error",

    // One JSX Element Per Line
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-one-expression-per-line.md
    "react/jsx-one-expression-per-line": ["error", { allow: "single-child" }],

    // Enforce PascalCase for user-defined JSX components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    "react/jsx-pascal-case": ["error", {
      allowAllCaps: true,
      ignore: [],
    }],

    // Disallow multiple spaces between inline JSX props
    // https://github.com/yannickcr/eslint-plugin-react/blob/ac102885765be5ff37847a871f239c6703e1c7cc/docs/rules/jsx-props-no-multi-spaces.md
    "react/jsx-props-no-multi-spaces": "error",

    // Disallow JSX props spreading
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    "react/jsx-props-no-spreading": ["error", {
      html: "enforce",
      custom: "enforce",
      exceptions: [],
    }],

    // Validate whitespace in and around the JSX opening and closing brackets
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-tag-spacing.md
    "react/jsx-tag-spacing": ["error", {
      closingSlash: "never",
      beforeSelfClosing: "always",
      afterOpening: "never",
      beforeClosing: "never",
    }],

    // Prevent missing parentheses around multilines JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-wrap-multilines.md
    "react/jsx-wrap-multilines": ["error", {
      declaration: "parens-new-line",
      assignment: "parens-new-line",
      return: "parens-new-line",
      arrow: "parens-new-line",
      condition: "parens-new-line",
      logical: "parens-new-line",
      prop: "parens-new-line",
    }],
  },

  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json"],
      },
    },
    react: {
      pragma: "React",
      version: "detect",
    },
    propWrapperFunctions: [
      "forbidExtraProps", // https://www.npmjs.com/package/airbnb-prop-types
      "exact", // https://www.npmjs.com/package/prop-types-exact
      "Object.freeze", // https://tc39.github.io/ecma262/#sec-object.freeze
    ],
  },
};

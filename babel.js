const style = require("./rules/base/style").rules;
const bestPractices = require("./rules/base/best-practices").rules;

module.exports = {
  parser: "babel-eslint",

  extends: [require.resolve("./base")],

  plugins: ["@babel"],

  rules: {
    // Require a capital letter for constructors
    // Babel: Ignores capitalized decorators (@Decorator)
    "new-cap": "off",
    "@babel/new-cap": style["new-cap"],

    // Require padding inside curly braces
    // Babel: doesn't complain about export x from "mod"; or export * as x from "mod";
    "object-curly-spacing": "off",
    "@babel/object-curly-spacing": style["object-curly-spacing"],

    // Require or disallow use of semicolons instead of ASI
    // Babel: doesn't fail when using for await (let something of {}). Includes class properties
    semi: "off",
    "@babel/semi": style.semi,

    // Disallow this keywords outside of classes or class-like objects
    // Babel: doesn't fail when inside class properties (class A { a = this.b; })
    "no-invalid-this": "off",
    "@babel/no-invalid-this": bestPractices["no-invalid-this"],

    // Disallow usage of expressions in statement position
    // Babel: doesn't fail when using do expressions or optional chaining (a?.b()).
    "no-unused-expressions": "off",
    "@babel/no-unused-expressions": bestPractices["no-unused-expressions"],
  },
};

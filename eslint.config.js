const react = require("eslint-plugin-react");

module.exports = [{
  files: ["**/*.jsx", "**/*.tsx"],
  languageOptions: {
    ecmaVersion: "latest",
    globals: {
      JSX: true,
      PropTypes: true,
      React: true,
      ReactDOM: true,
      ReactDOMServer: true
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: "latest",
      sourceType: "module"
    }
  },
  linterOptions: {
    noInlineConfig: false,
    reportUnusedDisableDirectives: "error"
  },
  plugins: {
    react
  },
  rules: {
    "comma-dangle": ["warn", "never"],
    quotes: [
      "warn",
      "double",
      {
        avoidEscape: true
      }
    ],
    "require-jsdoc": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}];
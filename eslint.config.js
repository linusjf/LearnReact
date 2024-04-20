const react = require("eslint-plugin-react");
const globals = require("globals");

module.exports = [
  {
    files: ["**/*.jsx", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser
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
  }
];

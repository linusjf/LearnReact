const globals = require("globals");
const js = require("@eslint/js");
const jsdoc = require("eslint-plugin-jsdoc");
const typescript = require("typescript-eslint");
const tsParser = require("@typescript-eslint/parser");
const html = require("@html-eslint/eslint-plugin");
const htmlparser = require("@html-eslint/parser");
const yaml = require("eslint-plugin-yml");
const jsonc = require("eslint-plugin-jsonc");
const react = require("eslint-plugin-react/configs/recommended");

const config = [
  {
    ignores: ["**/dist/**/*", "**/build/**/*"],
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: "error"
    }
  },
  {
    ignores: ["**/dist/**/*", "**/build/**/*"],
    files: [
      "**/*.jsx",
      "**/*.tsx",
      "**/*.ts",
      "**/*.js",
      "**/*.mjs",
      "**/*.cjs",
      "./.*.js"
    ],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    ...js.configs.recommended,
    ...jsdoc.configs["flat/recommended"]
  },
  {
    name: "ESLint for TypeScript",
    files: ["**/*.ts"],
    plugins: {
      ts: typescript
    },
    ...typescript.configs["flat/recommended"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      parser: tsParser
    },
    settings: {
      typescript: {
        version: "detect"
      }
    }
  },
  {
    ignores: ["**/dist/**/*", "**/build/**/*"],
    files: ["**/*.html"],
    plugins: {
      "@html-eslint": html
    },
    languageOptions: {
      parser: htmlparser
    },
    rules: {
      ...html.configs["flat/recommended"].rules,
      "@html-eslint/indent": ["error", 2],
      "@html-eslint/require-closing-tags": [
        "error",
        {
          selfClosing: "always"
        }
      ],
      "@html-eslint/no-extra-spacing-attrs": [
        "error",
        {
          enforceBeforeSelfClose: true
        }
      ],
      "@html-eslint/element-newline": [
        "error",
        {
          skip: ["pre", "code", "p"]
        }
      ]
    }
  },
  {
    ignores: ["**/dist/**/*", "**/build/**/*"],
    files: ["**/*.jsx"],
    ...react,
    rules: {
      "react/react-in-jsx-scope": "off"
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {},
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  {
    ignores: ["**/dist/**/*", "**/build/**/*"],
    files: ["**/*.tsx"],
    ...react,
    rules: {
      "react/react-in-jsx-scope": "off"
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "tsconfig.json"
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  ...yaml.configs["flat/recommended"],
  ...jsonc.configs["flat/recommended-with-json"]
];

module.exports = config;

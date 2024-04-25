import globals from "globals";
import js from "@eslint/js";
// import jsdoc from "eslint-plugin-jsdoc";
import typescript from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import html from "@html-eslint/eslint-plugin";
import htmlparser from "@html-eslint/parser";
import yaml from "eslint-plugin-yml";
import jsonc from "eslint-plugin-jsonc";
import react from "eslint-plugin-react/configs/recommended.js";
const myglobals = {
  Redux: true,
  RTK: true,
  describe: true,
  expect: true,
  test: true,
  ReduxThunk: true,
  it: true,
  PropTypes: true,
  HtmlSanitizer: true,
  ReactDOMServer: true,
  ReactRedux: true,
  JSX: true,
  React: true,
  ReactDOM: true
};

const config = [{
    ignores: ["**/dist/**/*", "**/build/**/*", "**/docs/**/*"],
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
        ...globals.node,
        ...myglobals
      }
    },
    ...js.configs.recommended
    //    ...jsdoc.configs["flat/recommended"]
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
        ...globals.node,
        ...myglobals
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
        ...globals.node,
        JSX: true
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

export default config;

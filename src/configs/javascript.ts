import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import type { TSESLint } from "@typescript-eslint/utils";
import perfectionist from "eslint-plugin-perfectionist";

export const javascript: TSESLint.FlatConfig.ConfigArray = [
  js.configs.recommended,
  {
    rules: {
      "curly": ["error", "all"],
      "default-case-last": "error",
      "eqeqeq": ["error", "always"],
      "new-cap": "error",
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-empty": [
        "error",
        {
          allowEmptyCatch: true,
        },
      ],
      "object-shorthand": "error",
      "prefer-template": "error",
    },
  },
  perfectionist.configs["recommended-natural"],
  {
    rules: {
      "perfectionist/sort-enums": "off",
      "perfectionist/sort-imports": [
        "error",
        {
          type: "natural",
          internalPattern: ["^~.+", "^@/.+", "^\\$.+"],
          newlinesBetween: 1,
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "ts-equals-import",
            "unknown",
          ],
        },
      ],
      "perfectionist/sort-interfaces": "off",
      "perfectionist/sort-object-types": "off",
      "perfectionist/sort-objects": "off",
      "perfectionist/sort-variable-declarations": "off",
    },
  },
  stylistic.configs.recommended,
  {
    rules: {
      "@stylistic/brace-style": [
        "error",
        "1tbs",
      ],
      "@stylistic/member-delimiter-style": [
        "error",
        {
          multiline: {
            delimiter: "semi",
            requireLast: true,
          },
          singleline: {
            delimiter: "semi",
            requireLast: false,
          },
        },
      ],
      "@stylistic/operator-linebreak": [
        "error",
        "after", {
          overrides: {
            "?": "before",
            ":": "before",
          },
        },
      ],
      "@stylistic/padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "*",
          next: ["class", "function", "interface", "type"],
        },
        {
          blankLine: "always",
          prev: ["class", "function", "interface", "type"],
          next: "*",
        },
        {
          blankLine: "always",
          prev: "*",
          next: ["multiline-const", "multiline-let", "multiline-var"],
        },
        {
          blankLine: "always",
          prev: ["multiline-const", "multiline-let", "multiline-var"],
          next: "*",
        },
        {
          blankLine: "never",
          prev: ["case", "default"],
          next: ["case", "default"],
        },
      ],
      "@stylistic/quotes": [
        "error",
        "double",
        {
          avoidEscape: true,
        },
      ],
      "@stylistic/semi": ["error", "always"],
    },
  },
];

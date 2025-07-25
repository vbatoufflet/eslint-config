import type { TSESLint } from "@typescript-eslint/utils";
import ts from "typescript-eslint";

const commonRules: TSESLint.FlatConfig.ConfigArray = [
  {
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/method-signature-style": ["error", "method"],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "enumMember",
          format: ["UPPER_CASE"],
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        {
          selector: "variableLike",
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
      ],
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": [
        "warn",
        {
          ignoreTypeReferences: true,
        },
      ],
    },
  },
];

export const typescript: TSESLint.FlatConfig.ConfigArray = [
  ...ts.configs.recommended,
  ...ts.configs.stylistic,
  ...commonRules,
];

export const typescriptTypeChecked: TSESLint.FlatConfig.ConfigArray = [
  ...ts.configs.recommendedTypeChecked,
  ...ts.configs.stylisticTypeChecked,
  ...commonRules,
  {
    rules: {
      "@typescript-eslint/no-unnecessary-condition": "error",
    },
  },
];

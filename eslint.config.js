import { defineConfig } from "eslint/config";

import batou from "./dist/index.js";

export default defineConfig(
  batou.gitignore(import.meta.url),
  ...batou.configs.javascript,
  ...batou.configs.typescriptTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["eslint.config.js", "vite.config.ts"],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-undef": "off",
    },
  },
);

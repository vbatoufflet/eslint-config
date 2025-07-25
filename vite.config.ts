import { resolve } from "path";

import { defineConfig } from "vite";
import { externalizeDeps } from "vite-plugin-externalize-deps";

export default defineConfig({
  plugins: [
    externalizeDeps({
      include: ["@eslint/js", "@stylistic/eslint-plugin", "eslint-plugin-perfectionist", "typescript-eslint"],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
  },
});

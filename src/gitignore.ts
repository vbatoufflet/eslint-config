import { fileURLToPath } from "node:url";

import { type FlatConfig, includeIgnoreFile } from "@eslint/compat";

export function gitignore(base: string): Readonly<FlatConfig> {
  const path = fileURLToPath(new URL("./.gitignore", base));
  return includeIgnoreFile(path);
}

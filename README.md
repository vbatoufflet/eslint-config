# eslint-config

This package provides a reusable ESLint configuration with JavaScript and TypeScript support.

## Usage

Get started by installing the required packages:

```bash
npm install --save-dev eslint @batou.dev/eslint-config
```

Then, if you use JavaScript, configure your `eslint.config.mjs` file:

```javascript
import { defineConfig } from "eslint/config";

export default defineConfig(
  batou.gitignore(import.meta.url),
  ...batou.configs.javascript,
);
```

Otherwise, if you use TypeScript, configure your `eslint.config.ts` file:

```typescript
import ts from "typescript-eslint";

export default ts.config(
  batou.gitignore(import.meta.url),
  ...batou.configs.javascript,
  ...batou.configs.typescript,
  // or ...batou.configs.typescriptTypeChecked,
);
```

## Links

* [Changelog][0]
* [npm package][1]

## License

This code is licensed and distributed under the term of the [MIT][0] license.

[0]: https://github.com/vbatoufflet/eslint-config/blob/master/CHANGELOG.md
[1]: https://www.npmjs.com/package/@batou.dev/eslint-config
[2]: https://opensource.org/licenses/MIT

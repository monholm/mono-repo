# @monholm/eslint-config

Shared ESLint configurations using ESLint 9's flat config format.

## Formatting

This ESLint config does not include Prettier rules. We recommend:

- Setting up format-on-save in your editor with Prettier
- Running `prettier --check` in CI

## Getting Started

All configs in this package require TypeScript, meaning they can't be used in pure JavaScript projects.

### Installation

```bash
pnpm add -D @monholm/eslint-config eslint typescript typescript-eslint @eslint/js eslint-plugin-import @stylistic/eslint-plugin
```

### TypeScript Configuration

The ESLint configuration uses `projectService` which automatically finds and uses your `tsconfig.json`. For this to work correctly, **all files being linted must be included in the tsconfig**.

The recommended approach is to use your root `tsconfig.json` for linting by omitting the `include` option, which will make TypeScript target all files by default. Then create a separate `tsconfig.build.json` for compilation that includes only the source files.

`tsconfig.json` (used for linting and type checking)

```json
{
  "extends": "@monholm/tsconfig",
  "exclude": ["node_modules", "dist"],
  "compilerOptions": {"noEmit": true}
}
```

`tsconfig.build.json` (used for building)

```json
{
  "extends": "./tsconfig.json",
  "include": ["src"],
  "compilerOptions": {"outDir": "dist", "noEmit": false}
}
```

Then build with `tsc -p tsconfig.build.json` and type check with `tsc`.

If you need to use a different tsconfig setup, please reference the typescript-eslint documentation on how to set up `projectService` instead of using the example eslint config provided later in this readme.

### Available Configs

This package uses [subpath exports](https://nodejs.org/api/packages.html#subpath-exports) in its `package.json`. You should import the configs as follows:

- **Base config:**
  ```js
  import {baseConfig} from '@monholm/eslint-config';
  ```
- **Node.js config:**
  ```js
  import {nodeConfig} from '@monholm/eslint-config/node';
  ```
- **React config:**
  ```js
  import {reactConfig} from '@monholm/eslint-config/react';
  ```

### Setup

#### Base Config (TypeScript)

`eslint.config.js`

```js
import {baseConfig} from '@monholm/eslint-config';
import {defineConfig} from 'eslint/config';

export default defineConfig([
  baseConfig,
  {languageOptions: {parserOptions: {projectService: true}}},
]);
```

#### Node.js

This config extends from the base config. You'll need to install the Node.js ESLint plugin:

```bash
pnpm add -D eslint-plugin-n
```

For `eslint-plugin-n` to work correctly, **you must specify the `engines` field in your `package.json`** so it knows your target Node.js version:

```json
{"engines": {"node": ">= 20"}}
```

`eslint.config.js`

```js
import {nodeConfig} from '@monholm/eslint-config/node';
import {defineConfig} from 'eslint/config';

export default defineConfig([
  nodeConfig,
  {languageOptions: {parserOptions: {projectService: true}}},
]);
```

#### React

This config extends from the base config. You'll need to install the React ESLint plugins:

```bash
pnpm add -D eslint-plugin-react eslint-plugin-react-hooks
```

`eslint.config.js`

```js
import {reactConfig} from '@monholm/eslint-config/react';
import {defineConfig} from 'eslint/config';

export default defineConfig([
  reactConfig,
  {languageOptions: {parserOptions: {projectService: true}}},
]);
```

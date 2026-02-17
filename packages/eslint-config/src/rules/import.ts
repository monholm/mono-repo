import type {Config} from 'eslint/config';

export const importRules: NonNullable<Config['rules']> = {
  'import/first': 'error',
  'import/no-empty-named-blocks': 'error',
  'import/no-extraneous-dependencies': [
    'error',
    {
      // globs where importing from devDependencies is allowed
      devDependencies: [
        'test/**',
        'tests/**',
        'spec/**',
        '**/__tests__/**',
        '**/__mocks__/**',
        '**/tests/**',
        '**/spec/**',
        '**/test/**',
        '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}',
        '**/eslint.config.{js,cjs,mjs}',
        '**/prettier.config.{js,cjs,mjs}',
        '**/vite.config.ts',
        '**/vitest.config.ts',
        '**/playwright.config.ts',
      ],
      optionalDependencies: false,
      bundledDependencies: false,
    },
  ],
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default': 'error',
  'import/no-named-as-default-member': 'error',
  'import/enforce-node-protocol-usage': ['error', 'always'],
  'import/no-absolute-path': 'error',
  /**
   * `ignoreExternal` decides if files imported from node_modules are also checked.
   * This goes against the general rule that linting shouldn't happen for dependencies,
   * and the example shown in the `eslint-plugin-import` documentation is unlikely to occur.
   *
   * This has the added benefit of a quicker lint, and in the case of react-native,
   * linting can succeed since no react-native/*.js files (written in flow) have to be parsed
   * by `eslint-plugin-import`.
   */
  'import/no-cycle': ['error', {maxDepth: '∞', ignoreExternal: true}],
  'import/no-dynamic-require': 'error',
  'import/no-relative-packages': 'error',
  'import/no-self-import': 'error',
  'import/no-useless-path-segments': 'error',
  'import/newline-after-import': 'error',
  'import/no-unassigned-import': 'error',
  'import/order': 'error',
};

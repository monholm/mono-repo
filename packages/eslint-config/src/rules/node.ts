import type {Config} from 'eslint/config';

export const nodeRules: NonNullable<Config['rules']> = {
  'n/callback-return': 'error',
  'n/exports-style': 'error',
  'n/hashbang': 'error',
  'n/no-deprecated-api': 'error',
  'n/no-exports-assign': 'error',
  'n/no-path-concat': 'error',
  'n/no-process-exit': 'error',
  'n/no-sync': 'error',
  'n/no-unpublished-bin': 'error',
  // eslint-disable-next-line @stylistic/multiline-comment-style
  // 'n/no-unpublished-import': 'error', // Flags devDependencies as well (which duplicates import/no-extraneous-dependencies) and have no option to disable it.
  // 'n/no-unpublished-require': 'error', // Flags devDependencies as well (which duplicates import/no-extraneous-dependencies) and have no option to disable it.
  'n/no-unsupported-features/es-builtins': 'error',
  'n/no-unsupported-features/es-syntax': 'error',
  'n/no-unsupported-features/node-builtins': 'error',
  'n/prefer-global/buffer': 'error',
  'n/prefer-global/console': 'error',
  'n/prefer-global/process': 'error',
  'n/prefer-global/text-decoder': 'error',
  'n/prefer-global/text-encoder': 'error',
  'n/prefer-global/url': 'error',
  'n/prefer-global/url-search-params': 'error',
  // 'n/prefer-node-protocol': 'error', // Duplicate of import/enforce-node-protocol-usage
  'n/prefer-promises/dns': 'error',
  'n/prefer-promises/fs': 'error',
  'n/process-exit-as-throw': 'error',
};

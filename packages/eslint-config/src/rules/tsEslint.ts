import type {Config} from 'eslint/config';

export const tsEslintRules: NonNullable<Config['rules']> = {
  '@typescript-eslint/consistent-type-exports': [
    'error',
    {fixMixedExportsWithInlineTypeSpecifier: true},
  ],
  'class-methods-use-this': 'off',
  '@typescript-eslint/class-methods-use-this': 'error',
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {fixStyle: 'inline-type-imports'},
  ],
  'default-param-last': 'off',
  '@typescript-eslint/default-param-last': 'error',
  'max-params': 'off',
  '@typescript-eslint/max-params': ['error', {max: 3}],
  '@typescript-eslint/method-signature-style': 'error',
  '@typescript-eslint/no-import-type-side-effects': 'error',
  'no-loop-func': 'off',
  '@typescript-eslint/no-loop-func': 'error',
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': ['error', {hoist: 'all'}],
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/no-unsafe-type-assertion': 'error',
  'no-unused-private-class-members': 'off',
  '@typescript-eslint/no-unused-private-class-members': 'error',
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': [
    'error',
    {functions: false, classes: true, variables: false},
  ],
  '@typescript-eslint/no-useless-empty-export': 'error',
  'prefer-destructuring': 'off',
  '@typescript-eslint/prefer-destructuring': 'error',
  '@typescript-eslint/promise-function-async': 'error',
  '@typescript-eslint/require-array-sort-compare': 'error',
  '@typescript-eslint/strict-boolean-expressions': [
    'error',
    {allowString: false, allowNumber: false},
  ],
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {argsIgnorePattern: '^_', varsIgnorePattern: '^_'},
  ],
  '@typescript-eslint/restrict-template-expressions': [
    'error',
    {allowNumber: true, allowBoolean: true},
  ],
  '@typescript-eslint/no-misused-promises': [
    'error',
    {checksVoidReturn: {attributes: false}},
  ],
  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': ['error', {enforceForJSX: true}],
};

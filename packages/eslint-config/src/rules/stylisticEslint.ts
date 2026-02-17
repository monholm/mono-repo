import type {Config} from 'eslint/config';

export const stylisticEslintRules: NonNullable<Config['rules']> = {
  /*
   * From https://eslint.style/rules/jsx-curly-brace-presence:
   *
   * Note: it is highly recommended that you configure this rule with an object,
   * and that you set "propElementValues" to "always".
   * The ability to omit curly braces around prop values that are JSX elements is obscure,
   * and intentionally undocumented, and should not be relied upon.
   */
  '@stylistic/jsx-curly-brace-presence': [
    'error',
    {props: 'never', children: 'never', propElementValues: 'always'},
  ],
  '@stylistic/jsx-pascal-case': 'error',
  '@stylistic/jsx-self-closing-comp': 'error',
  '@stylistic/linebreak-style': ['error', 'unix'],
  '@stylistic/multiline-comment-style': 'error',
  '@stylistic/spaced-comment': 'error',
  '@stylistic/wrap-iife': ['error', 'inside'],
};

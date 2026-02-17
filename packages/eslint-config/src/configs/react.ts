import {defineConfig} from 'eslint/config';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import {reactRules} from '../rules/react.js';
import {reactHooksRules} from '../rules/reactHooks.js';
import {baseConfig} from './base.js';

export const reactConfig = defineConfig(
  baseConfig,
  {plugins: {react: reactPlugin}, rules: reactRules},
  {plugins: {'react-hooks': reactHooksPlugin}, rules: reactHooksRules},
);

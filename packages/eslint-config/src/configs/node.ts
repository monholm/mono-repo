import {defineConfig} from 'eslint/config';
import nodePlugin from 'eslint-plugin-n';
import {nodeRules} from '../rules/node.js';
import {baseConfig} from './base.js';

export const nodeConfig = defineConfig(baseConfig, {
  plugins: {n: nodePlugin},
  rules: nodeRules,
});

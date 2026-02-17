import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import stylisticEslint from '@stylistic/eslint-plugin';
import {defineConfig} from 'eslint/config';
import {eslintRules} from '../rules/eslint.js';
import {tsEslintRules} from '../rules/tsEslint.js';
import {importRules} from '../rules/import.js';
import {stylisticEslintRules} from '../rules/stylisticEslint.js';

export const baseConfig = defineConfig(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {rules: eslintRules},
  {rules: tsEslintRules},
  {plugins: {import: importPlugin}, rules: importRules},
  {plugins: {'@stylistic': stylisticEslint}, rules: stylisticEslintRules},
);

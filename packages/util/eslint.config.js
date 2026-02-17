import {baseConfig} from '@monholm/eslint-config';
import {defineConfig} from 'eslint/config';

export default defineConfig([
  baseConfig,
  {languageOptions: {parserOptions: {projectService: true}}},
  {ignores: ['dist']},
]);

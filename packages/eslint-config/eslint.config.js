import {defineConfig, globalIgnores} from 'eslint/config';
import {baseConfig} from './dist/configs/base.js';

export default defineConfig([
  globalIgnores(['dist']),
  baseConfig,
  {languageOptions: {parserOptions: {projectService: true}}},
]);

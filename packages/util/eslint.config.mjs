import eslintConfig from '@monholm/eslint-config';
import {defineConfig} from 'eslint/config';

export default defineConfig([
  eslintConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  {ignores: ['dist']},
]);

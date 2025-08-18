import eslintConfig from '@monholm/eslint-config';
import tseslint from 'typescript-eslint';

export default tseslint.config([
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

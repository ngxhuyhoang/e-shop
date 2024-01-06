module.exports = {
  root: true,
  extends: '@react-native',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react-hooks/exhaustive-deps': 'off', // <--- THIS IS THE NEW RULE,
        'react-native/no-unused-styles': 'warn',
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
        'max-len': [1, 120, 2],
        curly: 'off',
        'react-native/no-inline-styles': 'error',
        'no-duplicate-imports': 'error',
      },
    },
  ],
};

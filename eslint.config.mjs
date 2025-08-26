export default [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      '.husky/**',
    ],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: true,
        babelOptions: {
          presets: ['next/babel', '@babel/preset-react'],
        },
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        React: 'readonly',
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'writable',
        module: 'writable',
        require: 'readonly',
        global: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        fetch: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-undef': 'error',
      'prefer-const': 'warn',
    },
  },
];

module.exports = {
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      alias: {
        map: [
          ['@/atoms', './src/component/atoms'],
          ['@/pages', './src/component/pages'],
          ['@/molecules', './src/component/molecules'],
          ['@/organisms', './src/component/organisms'],
          ['@/templates', './src/component/templates'],
          ['@/utility/styles', './src/utility/styles']
        ]
      }
    }
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  plugins: ['react', 'prettier'],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off'
  }
};

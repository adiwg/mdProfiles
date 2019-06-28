module.exports = {
  extends: ['plugin:prettier/recommended', 'plugin:node/recommended'],
  env: {
    browser: false,
    node: true,
    es6: true
  },
  overrides: [
    //ES6 files
    {
      files: ['rollup.config.js', 'src/main.js'],
      rules: {
        'node/no-unsupported-features/es-syntax': 0
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
      },
      env: {
        browser: false,
        node: false,
        es6: true
      }
    }
  ]
};

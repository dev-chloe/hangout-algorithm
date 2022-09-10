module.exports = {
  "env": {
    "node": true,
    "es2021": true,
    "jest": true,
    "jest/globals": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "plugins": [
    "jest"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    // eslint:recommended
    "indent": ["error", 2],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "eqeqeq": "off",
    "curly": "error",
    "comma-dangle": ["error", "never"],

    "no-console": "off",
    "no-cond-assign": ["error", "always"],
    "no-empty": "warn",

    // eslint-plugin-jest
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  }
};

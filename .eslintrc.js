module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:import/errors", "plugin:import/warnings", "plugin:import/typescript"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  rules: {
    "no-debugger": "off",
    "no-console": "off",
    "no-unused-vars": "warn",
    "react/prop-types": "off"
  },
  root: true
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "plugin:react-hooks/recommended", "prettier"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/function-component-definition": 1,
    "react/prop-types": 1,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "react/react-in-jsx-scope": 0,
    "react/require-default-props": 0,
    "react/jsx-props-no-spreading": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/no-unused-prop-types": 0,
    "react-hooks/exhaustive-deps": 1,
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["state"] },
    ],
  },
  overrides: [
    {
      files: ["*.jsx"],
      rules: {
        "react/function-component-definition": "off",
        "react/prop-types": "off",
      },
    },
  ],
};

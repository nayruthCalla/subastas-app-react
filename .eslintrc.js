module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/jsx-runtime", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": "off",
    "eslint-disable-next-line": "off",
    "arrow-body-style": "off",
    "react/react-in-jsx-scope": 0,
    "react/jsx-uses-react": 0,
    "react/no-array-index-key": "off",
    "react/jsx-no-constructed-context-values": "off",
    "no-use-before-define": "off",
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
  },
};

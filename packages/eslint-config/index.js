module.exports = {
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        trailingComma: "es5",
        semi: false,
      },
    ],

    // React 17+ uses automatic runtime, so no 'React' import necessary
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
    // Note that you must disable the base rule as it can report incorrect errors.
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],

    // No prop-types with typescript
    "react/prop-types": "off",
    "react/require-default-props": "off",

    // Allow .tsx file extensions for JSX
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],

    // Expect all components to be arrow functions for consistency
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],

    "import/prefer-default-export": "off",

    // Remove missing file extension errors for .ts and .js files
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  env: {
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    // fixes issue where modules can't be found without extensions
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
}

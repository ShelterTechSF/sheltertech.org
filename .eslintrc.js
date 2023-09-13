module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:storybook/recommended",
  ],
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  rules: {
    "import/order": ["error", { alphabetize: { order: "asc" } }],
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    // Disable prop-types check because they're redundant with TypeScript.
    "react/prop-types": ["off"],
    // Disable default props checks because TypeScript will enforce proper
    // null/undefined checks on optional parameters.
    "react/require-default-props": ["off"],
  },
  overrides: [
    {
      // Non-TypeScript, JavaScript files
      files: ["*.js", "*.jsx"],
      rules: {
        // Disable TypeScript-specific rules on regular JavaScript files.
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
      },
    },
    {
      // Gatsby configuration files
      files: ["gatsby-config.js"],
      rules: {
        // global-require is fine because this is a Node.js script.
        "global-require": "off",
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true },
        ],
      },
    },
    {
      // Legacy files
      files: ["src/legacy/**"],
      rules: {
        "react/jsx-filename-extension": [
          "error",
          { extensions: [".js", ".jsx"] },
        ],
      },
    },
    {
      // Storybook configuration files
      files: [".storybook/**"],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true },
        ],
      },
    },
    {
      // Storybook stories
      files: ["src/**/*.stories.js"],
      rules: {
        // Do not require PropTypes to be declared on ad hoc Storybook
        // React components.
        "react/prop-types": ["error", { skipUndeclared: true }],
      },
    },
    {
      // Jest
      files: ["__mocks__/**", "jest/**", "**/*.test.js"],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true },
        ],
        // Airbnb disallows certain syntax because they may be expensive to run
        // in a browser when transpiling to older versions of JavaScript. This
        // is not a concern for our test code that runs on Node.js, since this
        // newer syntax is natively supported.
        "no-restricted-syntax": "off",
      },
      env: {
        // Jest injects itself as a variable in test files
        jest: true,
      },
    },
  ],
};

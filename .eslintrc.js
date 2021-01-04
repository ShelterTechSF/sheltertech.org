module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  rules: {
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".js", ".jsx", "tsx"] },
    ],
    "import/order": ["error", { alphabetize: { order: "asc" } }],
  },
  overrides: [
    {
      // Gatsby configuration files
      files: ["gatsby-config.js"],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true },
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
      files: ["src/**/*.stories.js", "src/**/*.stories.tsx"],
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

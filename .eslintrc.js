module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
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
      files: ["src/**/*.stories.js"],
      rules: {
        // Do not require PropTypes to be declared on ad hoc Storybook
        // React components.
        "react/prop-types": ["error", { skipUndeclared: true }],
      },
    },
    {
      // Jest
      files: ["__mocks__/**", "jest/**"],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true },
        ],
      },
      env: {
        // Jest injects itself as a varibable in test files
        jest: true,
      },
    },
  ],
};

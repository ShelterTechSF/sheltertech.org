const path = require("path");

/** Common CSS loader configurations */
const getCSSLoaders = ({ useModules }) => [
  "style-loader",
  {
    loader: "css-loader",
    options: {
      modules: useModules,
    },
  },
];

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    // Disable no-param-reassign because this API is designed to mutate the
    // config argument.
    /* eslint-disable no-param-reassign */

    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve("babel-loader");

    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-env"),
    ];

    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve("@babel/plugin-proposal-class-properties"),
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve("babel-plugin-remove-graphql-queries"),
    ];

    // Set up CSS Modules
    //
    // This removes the builtin CSS rule and replaces it with two rules: one
    // configured for CSS Modules and one without.
    // https://github.com/webpack-contrib/css-loader/issues/362#issuecomment-648895096
    config.module.rules = config.module.rules.filter(
      (r) => r.test.test && !r.test.test("file.css")
    );
    config.module.rules.push({
      test: /\.module\.css$/,
      use: getCSSLoaders({ useModules: true }),
      include: path.resolve(__dirname, "../"),
    });
    config.module.rules.push({
      test: (filePath) =>
        filePath.endsWith(".css") && !filePath.endsWith(".module.css"),
      use: getCSSLoaders({ useModules: false }),
      include: path.resolve(__dirname, "../"),
    });

    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ["browser", "module", "main"];

    return config;
    /* eslint-enable no-param-reassign */
  },
};

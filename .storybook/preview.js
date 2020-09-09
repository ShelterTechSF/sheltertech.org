import { action } from "@storybook/addon-actions";

import "../src/stylesheets/global.css";

// Disable no-underscore-dangle because this is how Gatsby suggests configuring
// Storybook.
/* eslint-disable no-underscore-dangle */

// Disable import/prefer-default-export because this is how Storybook prefers
// for names to be exported in this file.
/* eslint-disable import/prefer-default-export */

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// This global variable is prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/";

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.

window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname);
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

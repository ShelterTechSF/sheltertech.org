import {
  createMemorySource,
  createHistory,
  LocationProvider,
  // @reach/router is used by Gatsby, but we're only importing it here in order
  // to mock out the router. We don't really want to add this to this project's
  // dependencies because if Gatsby switches away from it, we shouldn't use it
  // here, either. Therefore, we're waiving this lint error.
  // eslint-disable-next-line import/no-extraneous-dependencies
} from "@reach/router";
import React from "react";

import Navigation from "./Navigation";

export default {
  title: "Grid-Aware/Navigation",
  component: Navigation,
};

const Template = ({ homeURL, navigationItems }) => {
  // Set the current route to /volunteer in order to demonstrate styling for
  // links to the current page.
  const source = createMemorySource("/volunteer");
  const history = createHistory(source);
  return (
    <LocationProvider history={history}>
      <Navigation homeURL={homeURL} navigationItems={navigationItems} />
    </LocationProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  homeURL: "/",
  navigationItems: [
    { text: "About", internalLink: "/about" },
    { text: "Programs", internalLink: "/programs" },
    { text: "Work with Us", internalLink: "/volunteer" },
    { text: "News", externalLink: "https://example.com" },
    { text: "Donate", internalLink: "/donate", isButton: true },
  ],
};

// @reach/router is used by Gatsby, but we're only importing it here in order
// to mock out the router. We don't really want to add this to this project's
// dependencies because if Gatsby switches away from it, we shouldn't use it
// here, either. Therefore, we're waiving this lint error.
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  createMemorySource,
  createHistory,
  LocationProvider,
} from "@reach/router";
import React, { useState } from "react";

import BurgerMenu from "./BurgerMenu";
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
  const pageWrapperID = "page-wrapper";
  const outerContainerID = "outer-container";
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);
  return (
    <div id={outerContainerID}>
      <LocationProvider history={history}>
        <BurgerMenu
          isOpen={burgerMenuIsOpen}
          setIsOpen={setBurgerMenuIsOpen}
          navigationItems={navigationItems}
          pageWrapperID={pageWrapperID}
          outerContainerID={outerContainerID}
        />

        <div id={pageWrapperID}>
          <Navigation
            homeURL={homeURL}
            navigationItems={navigationItems}
            toggleBurgerMenu={() => setBurgerMenuIsOpen(!burgerMenuIsOpen)}
          />
        </div>
      </LocationProvider>
    </div>
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

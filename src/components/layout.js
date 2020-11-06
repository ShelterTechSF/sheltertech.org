import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";

import "../stylesheets/global.css";
import Footer from "./grid-aware/Footer";
import { BurgerMenu, Navigation } from "./grid-aware/Navigation";

const navigationItems = [
  { text: "Programs", internalLink: "/new" },
  { text: "Volunteer", internalLink: "/new/volunteer" },
  { text: "Donate", internalLink: "/new/donate", isButton: true },
];

const Layout = ({ children }) => {
  const pageWrapperID = "page-wrapper";
  const outerContainerID = "outer-container";
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);
  useEffect(() => {
    ReactModal.setAppElement(`#${outerContainerID}`);
  }, []);
  return (
    <div id={outerContainerID}>
      <BurgerMenu
        isOpen={burgerMenuIsOpen}
        setIsOpen={setBurgerMenuIsOpen}
        navigationItems={navigationItems}
        pageWrapperID={pageWrapperID}
        outerContainerID={outerContainerID}
      />
      <div id={pageWrapperID}>
        <Navigation
          homeURL="/new"
          navigationItems={navigationItems}
          toggleBurgerMenu={() => setBurgerMenuIsOpen(!burgerMenuIsOpen)}
        />
        {children}
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;

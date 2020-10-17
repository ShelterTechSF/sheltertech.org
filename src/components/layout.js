import PropTypes from "prop-types";
import React from "react";

import "../stylesheets/global.css";

// TODO: This component should eventually have anything that is common to all
// pages, such as the header and footers, but for now, we are mostly using this
// to ensure that the global CSS file gets imported by all pages.
const Layout = ({ children }) => <div>{children}</div>;

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;

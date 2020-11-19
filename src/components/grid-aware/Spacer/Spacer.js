import PropTypes from "prop-types";
import React from "react";

import s from "./Spacer.module.css";

const Spacer = ({ heightDesktop, heightMobile, color }) => (
  <div
    style={{
      "--spacer-height-desktop": heightDesktop,
      "--spacer-height-mobile": heightMobile,
      "--spacer-color": `${color}`,
    }}
    className={s.spacer}
  />
);

Spacer.propTypes = {
  heightDesktop: PropTypes.string.isRequired,
  heightMobile: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Spacer.defaultProps = {
  color: "transparent",
};

export default Spacer;

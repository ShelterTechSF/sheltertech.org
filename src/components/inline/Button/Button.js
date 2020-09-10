import PropTypes from "prop-types";
import React from "react";

import s from "./Button.module.css";

const Button = ({ children }) => (
  <button className={s.button} type="button">
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  children: null,
};

export default Button;

import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import s from "./Button.module.css";

const Button = ({ button }) => {
  if (button.externalLink) {
    return (
      <a
        rel="noreferrer"
        target="_blank"
        href={button.externalLink}
        className={s.button}
      >
        {button.text}
      </a>
    );
  }
  if (button.internalLink) {
    return (
      <Link to={button.internalLink} className={s.button}>
        {button.text}
      </Link>
    );
  }
  if (button.onClick) {
    return (
      <button
        type="button"
        className={s.button}
        onClick={(event) => {
          button.onClick(event);
        }}
      >
        {button.text}
      </button>
    );
  }
  throw new Error("PropTypes are invalid");
};

Button.propTypes = PropTypes.oneOfType([
  PropTypes.exact({
    text: PropTypes.string,
    externalLink: PropTypes.string,
  }),
  PropTypes.exact({
    text: PropTypes.string,
    internalLink: PropTypes.string,
  }),
  PropTypes.exact({
    text: PropTypes.string,
    onClick: PropTypes.func,
  }),
]).isRequired;

export default Button;

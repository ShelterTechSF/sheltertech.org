import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import s from "./Button.module.css";

const Button = ({ text, externalLink, internalLink, onClick }) => {
  if (externalLink) {
    return (
      <a
        rel="noreferrer"
        target="_blank"
        href={externalLink}
        className={s.button}
      >
        {text}
      </a>
    );
  }
  if (internalLink) {
    return (
      <Link to={internalLink} className={s.button}>
        {text}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button
        type="button"
        className={s.button}
        onClick={(event) => {
          onClick(event);
        }}
      >
        {text}
      </button>
    );
  }
  throw new Error(
    "Missing required prop. Must specify one of: externalLink, internalLink, or onClick."
  );
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

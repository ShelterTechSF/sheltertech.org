import classNames from "classnames";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import s from "./Button.module.css";

const Button = ({ text, externalLink, internalLink, onClick, noHover }) => {
  const button = classNames(s.button, {
    [s.noHover]: noHover,
  });

  if (externalLink) {
    return (
      <a
        rel="noreferrer"
        target="_blank"
        href={externalLink}
        className={button}
      >
        {text}
      </a>
    );
  }
  if (internalLink) {
    return (
      <Link className={button} to={internalLink}>
        {text}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button
        type="button"
        className={button}
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

/** A version of the Button specifically to be used with forms as the submit button. */
export const SubmitButton = ({ value, noHover, name }) => {
  const className = classNames(s.button, {
    [s.noHover]: noHover,
  });
  return (
    <input className={className} type="submit" name={name} value={value} />
  );
};

SubmitButton.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  noHover: PropTypes.bool,
};

SubmitButton.defaultProps = {
  noHover: false,
};

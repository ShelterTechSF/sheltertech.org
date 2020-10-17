import PropTypes from "prop-types";
import React from "react";

import s from "./Button.module.css";

const Button = ({ button }) => {
  let buttonView;

  if (button.externalLink) {
    buttonView = (
      <a rel="noreferrer" target="_blank" href={button.externalLink}>
        <button type="button" className={s.button}>
          {button.text}
        </button>
      </a>
    );
  } else if (button.internalLink) {
    buttonView = (
      <a href={button.internalLink}>
        <button type="button" className={s.button}>
          {button.text}
        </button>
      </a>
    );
  } else {
    buttonView = (
      <button
        type="button"
        className={s.button}
        onClick={() => {
          button.scriptAction();
        }}
      >
        {button.text}
      </button>
    );
  }

  return <div>{buttonView}</div>;
};

const ButtonPropType = PropTypes.oneOfType([
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
    scriptAction: PropTypes.func,
  }),
]);

Button.propTypes = {
  button: ButtonPropType.isRequired,
};

export default Button;

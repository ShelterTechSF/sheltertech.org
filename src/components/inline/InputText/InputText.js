import PropTypes from "prop-types";
import React from "react";

import s from "./InputText.module.css";

export const InputTextPropType = PropTypes.shape({
  placeholderText: PropTypes.string,
  widthDesktop: PropTypes.string.isRequired,
  widthMobile: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
});

export const InputText = ({ inputText }) => {
  return (
    <input
      className={s.inputText}
      style={{
        "--input-text-desktop": `${inputText.widthDesktop}`,
        "--input-text-mobile": `${inputText.widthMobile}`,
      }}
      type="text"
      placeholder={inputText.placeholderText}
      onChange={inputText.onChange}
      value={inputText.value}
    />
  );
};

InputText.propTypes = {
  inputText: InputTextPropType.isRequired,
};

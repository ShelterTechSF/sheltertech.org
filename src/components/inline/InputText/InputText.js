import PropTypes from "prop-types";
import React from "react";

import s from "./InputText.module.css";

const InputText = ({ placeholderText, onChange, value, type }) => {
  return (
    <input
      className={s.inputText}
      type={type}
      placeholder={placeholderText}
      onChange={onChange}
      value={value}
    />
  );
};

InputText.propTypes = {
  placeholderText: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
};

InputText.defaultProps = {
  placeholderText: undefined,
  onChange: undefined,
  value: undefined,
};

export default InputText;

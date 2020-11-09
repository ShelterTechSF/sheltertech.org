import PropTypes from "prop-types";
import React from "react";

import s from "./InputText.module.css";

const InputText = ({ placeholderText }) => {
  return (
    // must specify width on parent element
    <input className={s.inputText} type="text" placeholder={placeholderText} />
  );
};

InputText.propTypes = {
  placeholderText: PropTypes.string.isRequired,
};

export default InputText;

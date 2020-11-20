import PropTypes from "prop-types";
import React from "react";

import "./globals.css";
import s from "./BaseForm.module.css";

/* eslint-disable react/no-danger */
// This entire file is just about embedding an external form

const BaseForm = ({ title, description, rawFormHTML }) => (
  <div>
    <h1 className={s.title}>{title}</h1>
    <p className={s.description}>{description}</p>
    <div dangerouslySetInnerHTML={{ __html: rawFormHTML }} />
  </div>
);

BaseForm.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rawFormHTML: PropTypes.string.isRequired,
};

export default BaseForm;

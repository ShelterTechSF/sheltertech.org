import PropTypes from "prop-types";
import React from "react";

import s from "./HomePageParagraph.module.css";

const HomePageParagraph = ({ text }) => (
  <p className={s.text}>{text}</p>
);

HomePageParagraph.propTypes = {
  text: PropTypes.string.isRequired,
};


export default HomePageParagraph;

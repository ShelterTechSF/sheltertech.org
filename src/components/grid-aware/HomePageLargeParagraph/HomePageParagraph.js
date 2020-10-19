import PropTypes from "prop-types";
import React from "react";

import s from "./HomePageParagraph.module.css";

const HomePageParagraph = ({ text }) => {
  const GridAreaMiddle = () => (
    <div className={s.gridAreaMiddle}>
      <div className={s.text}>{text}</div>
    </div>
  );

  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedMainContent}>
        <GridAreaMiddle />
      </div>
    </div>
  );
};

HomePageParagraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HomePageParagraph;

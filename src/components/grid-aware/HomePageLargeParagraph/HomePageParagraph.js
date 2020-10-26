import PropTypes from "prop-types";
import React from "react";

import s from "./HomePageParagraph.module.css";

const HomePageParagraph = ({ title, description }) => {
  const GridAreaMiddle = () => 
    <div>
      <p className={s.title}>{title}</p>
      <p className={s.description}>{description}</p>
    </div>

  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedMainContent}>
        <GridAreaMiddle />
      </div>
    </div>
  );
};

HomePageParagraph.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HomePageParagraph;

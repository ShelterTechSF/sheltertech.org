import PropTypes from "prop-types";
import React from "react";

import s from "./HomePageLargeParagraph.module.css";

const HomePageLargeParagraph = ({ title, description }) => {
  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedMainContent}>
        <div className={s.gridParent}>
          <div className={s.textWrapper}>
            <div className={s.title}>{title}</div>
            <div className={s.description}>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

HomePageLargeParagraph.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HomePageLargeParagraph;

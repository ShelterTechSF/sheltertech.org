import PropTypes from "prop-types";
import React from "react";

import s from "./TitleBlock.module.css";

const TitleBlock = ({ title }) => {
  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedMainContent}>
        <div className={s.textWrapper}>
          <div className={s.title}>{title}</div>
        </div>
      </div>
    </div>
  );
};

TitleBlock.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleBlock;

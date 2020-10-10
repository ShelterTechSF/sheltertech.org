import PropTypes from "prop-types";
import React from "react";
import s from "./ProgramCard.module.css";

const ProgramCard = ({ photo, title, description }) => (
  <div className={s["card-container"]}>
    <div className={s["img-container"]}>
      <img className={s.img} src={photo} alt="" />
    </div>
    <div>
      <div className={s["title-container"]}>
        <div className={s.title}>{title}</div>
      </div>
      <div className={s["description-container"]}>
        <div className={s.description}>{description}</div>
      </div>
    </div>
  </div>
);

ProgramCard.propTypes = {
  photo: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

ProgramCard.defaultProps = {
  photo: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ProgramCard;

import PropTypes from "prop-types";
import React from "react";
import s from "./ProgramCard.module.css";

const ProgramCard = ({ theme, image, imageAlt, title, description }) => (
  <div
    className={`${s.programCardContainer} 
    ${theme === "light" ? s.light : s.dark}`}
  >
    <div>
      <img className={s.img} src={image} alt={imageAlt} />
    </div>
    <div className={s.title}>{title}</div>
    <div className={s.description}>{description}</div>
  </div>
);

ProgramCard.propTypes = {
  theme: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProgramCard;
import PropTypes from "prop-types";
import React from "react";
import s from "./ProgramCard.module.css";

const ProgramCard = ({ image, alt, title, description }) => (
  <div className={s.programCardContainer}>
    <div>
      <img className={s.img} src={image} alt={alt} />
    </div>
    <div className={s.title}>{title}</div>
    <div className={s.description}>{description}</div>
  </div>
);

ProgramCard.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

ProgramCard.defaultProps = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProgramCard;

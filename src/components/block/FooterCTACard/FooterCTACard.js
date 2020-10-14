import PropTypes from "prop-types";
import React from "react";
import Button from "../../inline/Button";
import s from "./FooterCTACard.module.css";

const FooterCTACard = ({ title, description, buttonText }) => (
  <div className={s.container}>
    <div className={s.title}>{title}</div>
    <div className={s.description}>{description}</div>
    <div className={s.buttonWrapper}>
      <Button>{buttonText}</Button>
    </div>
  </div>
);

FooterCTACard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default FooterCTACard;

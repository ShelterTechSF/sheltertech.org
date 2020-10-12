import PropTypes from "prop-types";
import React from "react";
import Button from "../../inline/Button";
import s from "./FooterCTACard.module.css";

const FooterCTACard = ({ title, body, buttonText }) => (
  <div className={s.container}>
    <div className={s.title}>{title}</div>
    <div className={s.body}>{body}</div>
    <div className={s.buttonWrapper}>
      <Button>{buttonText}</Button>
    </div>
  </div>
);

FooterCTACard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default FooterCTACard;

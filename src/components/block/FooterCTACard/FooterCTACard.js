import PropTypes from "prop-types";
import React from "react";
import Button from "../../inline/Button";
import s from "./FooterCTACard.module.css";

const FooterCTACard = ({ subtitle, body, buttonText }) => (
  <div className={s.container}>
    <div className={s.subtitle}>{subtitle}</div>
    <div className={s.body}>{body}</div>
    <div className={s.button}>
      <Button>{buttonText}</Button>
    </div>
  </div>
);

FooterCTACard.propTypes = {
  subtitle: PropTypes.string,
  body: PropTypes.string,
  buttonText: PropTypes.string,
};

FooterCTACard.defaultProps = {
  subtitle: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default FooterCTACard;

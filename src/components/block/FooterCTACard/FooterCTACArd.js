import PropTypes from "prop-types";
import React from "react";
import Button from "../../inline/Button";
import s from "./FooterCTACArd.module.css";

const FooterCTACArd = ({ subTitle, body, buttonText }) => (
  <div className={s.container}>
    <div className={s.subTitle}>{subTitle}</div>
    <div className={s.body}>{body}</div>
    <div className={s.button}>
      <Button>{buttonText}</Button>
    </div>
  </div>
);

FooterCTACArd.propTypes = {
  subTitle: PropTypes.string,
  body: PropTypes.string,
  buttonText: PropTypes.string,
};

FooterCTACArd.defaultProps = {
  subTitle: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default FooterCTACArd;

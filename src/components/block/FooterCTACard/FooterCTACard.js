import PropTypes from "prop-types";
import React from "react";
import Button from "../../inline/Button";
import s from "./FooterCTACard.module.css";

const ButtonPropType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
});

const FooterCTACard = ({ title, description, button }) => (
  <div className={s.container}>
    <div className={s.title}>{title}</div>
    <div className={s.description}>{description}</div>
    <div className={s.buttonWrapper}>
      <Button text={button.text} internalLink={button.link} />
    </div>
  </div>
);

FooterCTACard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: ButtonPropType.isRequired,
};

export default FooterCTACard;

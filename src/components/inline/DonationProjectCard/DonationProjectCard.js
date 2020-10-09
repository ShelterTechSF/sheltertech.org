import PropTypes from "prop-types";
import React from "react";

import s from "./DonationProjectCard.module.css";

const DonationProjectCard = ({ title, subtitle }) => (
  <div className={s.rectangle39}>
    <div className={s.frame20}>
      <div className={s.rectangle271} />
      <div className={s.space} />
      <div className={s.rightbox}>
        <div className={s.hotelname}>{title}</div>
        <div className={s.numberofpeople}>{subtitle}</div>
      </div>
    </div>
  </div>
);

DonationProjectCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

DonationProjectCard.defaultProps = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default DonationProjectCard;

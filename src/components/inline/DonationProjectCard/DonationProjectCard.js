import PropTypes from "prop-types";
import React from "react";

import s from "./DonationProjectCard.module.css";

const DonationProjectCard = ({ title, subtitle }) => (
  <div className={s.container}>
    <div className={s.bottombox}>
      <div className={s.bar} />
      <div>
        <div className={s.title}>{title}</div>
        <div className={s.subtitle}>{subtitle}</div>
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

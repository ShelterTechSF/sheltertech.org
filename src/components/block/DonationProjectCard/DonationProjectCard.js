import PropTypes from "prop-types";
import React from "react";

import s from "./DonationProjectCard.module.css";

const DonationProjectCard = ({ title, subtitle, background }) => (
  <div className={s.container} style= {{ backgroundImage:`url('${background}')` }}> 
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
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired
};

DonationProjectCard.defaultProps = {

};

export default DonationProjectCard;

import PropTypes from "prop-types";
import React from "react";
import * as s from "./InfoBlock.module.css";

function getYear() {
  return new Date().getFullYear();
}

const InfoBlock = ({ address, employerIdentificationNumber }) => {
  return (
    <div className={s.bleedWrapper}>
      <div className={s.organizationInfo}>
        <div>
          &copy; {getYear()}
          {` All Rights Reserved  •    ${employerIdentificationNumber}`}
        </div>
        <address className={s.address}>{address}</address>
      </div>
    </div>
  );
};

InfoBlock.propTypes = {
  address: PropTypes.string.isRequired,
  employerIdentificationNumber: PropTypes.string.isRequired,
};

export default InfoBlock;

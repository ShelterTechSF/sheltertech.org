import PropTypes from "prop-types";
import React from "react";
import s from "./InfoBlock.module.css";

function getYear() {
  return new Date().getFullYear();
}

const InfoBlock = ({ address, employeeIdentificationNumber }) => {
  return (
    <div className={s.bleedWrapper}>
      <div className={s.organizationInfo}>
        <div>
          &copy; {getYear()} All Rights Reserved &nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
          {employeeIdentificationNumber}
        </div>
        <address className={s.address}>{address}</address>
      </div>
    </div>
  );
};

InfoBlock.propTypes = {
  address: PropTypes.string.isRequired,
  employeeIdentificationNumber: PropTypes.string.isRequired,
};

export default InfoBlock;

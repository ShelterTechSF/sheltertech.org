import PropTypes from "prop-types";
import React from "react";
import s from "./InfoBlock.module.css";

function getYear() {
  return new Date().getFullYear();
}

const InfoBlock = ({ address, ein }) => {
  return (
    <div className={s.bleedWrapper}>
      <div className={s.infoBlock}>
        <div className={s.organizationInfo}>
          <div>
            &copy; {getYear()} All Rights Reserved {ein}
          </div>
          <address>{address}</address>
        </div>
      </div>
    </div>
  );
};

InfoBlock.propTypes = {
  address: PropTypes.string.isRequired,
  ein: PropTypes.string.isRequired,
};

export default InfoBlock;

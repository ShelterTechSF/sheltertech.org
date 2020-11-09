import React from "react";
import s from "./InfoBlock.module.css";

function getYear() {
  return new Date().getFullYear();
}

const InfoBlock = () => {
  return (
    <div className={s.bleedWrapper}>
      <div className={s.infoBlock}>
        <div className={s.organizationInfo}>
          <div>&copy; {getYear()} All Rights Reserved • ein: 38-3984099</div>
          <address>268 Bush Street #4302, San Francisco CA, 94104 USA</address>
        </div>
      </div>
    </div>
  );
};

InfoBlock.propTypes = {};

export default InfoBlock;

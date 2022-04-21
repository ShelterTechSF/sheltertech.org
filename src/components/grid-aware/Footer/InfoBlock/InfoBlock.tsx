import * as React from "react";
import * as s from "./InfoBlock.module.css";

function getYear() {
  return new Date().getFullYear();
}

type InfoBlockProps = {
  address?: string;
  employerIdentificationNumber: string;
};

const InfoBlock = ({
  address,
  employerIdentificationNumber,
}: InfoBlockProps) => {
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

export default InfoBlock;

import * as React from "react";

import s from "./DonationProjectCard.module.css";

type DonationProjectCardProps = {
  title: string;
  subtitle: string;
  background: string;
};

const DonationProjectCard = ({
  title,
  subtitle,
  background
}: DonationProjectCardProps) => (
  <div
    className={s.container}
    style={{ backgroundImage: `url('${background}')` }}
  >
    <div className={s.bottombox}>
      <div className={s.bar} />
      <div>
        <div className={s.title}>{title}</div>
        <div className={s.subtitle}>{subtitle}</div>
      </div>
    </div>
  </div>
);
export default DonationProjectCard;

import * as React from "react";

import s from "./PartnersAndSponsorsBlock.module.css";

type LogoPropType = {
  url: string;
  alt: string;
};

type PartnersAndSponsorsBlockProps = {
  title: string;
  partnersAndSponsors: LogoPropType[];
};

const PartnersAndSponsorsBlock = ({
  title,
  partnersAndSponsors,
}: PartnersAndSponsorsBlockProps) => {
  const GridAreaLeft = () => (
    <div className={s.gridAreaLeft}>
      <h1 className={s.title}>{title}</h1>
    </div>
  );

  const GridAreaRight = () => (
    <div className={s.gridAreaRight}>
      <div className={s.logosWrapper}>
        {partnersAndSponsors.map((logo) => (
          <div className={s.logoContainer} key={logo.alt}>
            <img className={s.logo} src={logo.url} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={s.bleedWrapper}>
      <section className={s.gridParent}>
        <GridAreaLeft />
        <GridAreaRight />
      </section>
    </div>
  );
};

export default PartnersAndSponsorsBlock;

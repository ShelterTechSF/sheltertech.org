import * as React from "react";

import * as s from "./PartnersAndSponsorsBlock.module.css";

type LogoPropType = Readonly<{
  url: string;
  alt: string;
}>;

type PartnersAndSponsorsBlockProps = {
  title: string;
  partnersAndSponsors: readonly LogoPropType[];
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

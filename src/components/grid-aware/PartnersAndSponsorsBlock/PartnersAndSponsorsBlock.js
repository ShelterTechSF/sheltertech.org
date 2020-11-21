import PropTypes from "prop-types";
import React from "react";

import { ImagePropType } from "../../../prop-types";

import s from "./PartnersAndSponsorsBlock.module.css";

const PartnersAndSponsorsBlock = ({ title, partnersAndSponsors }) => {
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

PartnersAndSponsorsBlock.propTypes = {
  title: PropTypes.string.isRequired,
  partnersAndSponsors: PropTypes.arrayOf(PropTypes.shape(ImagePropType))
    .isRequired,
};

export default PartnersAndSponsorsBlock;

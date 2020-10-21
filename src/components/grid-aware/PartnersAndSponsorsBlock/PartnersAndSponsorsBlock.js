import PropTypes from "prop-types";
import React from "react";

import s from "./PartnersAndSponsorsBlock.module.css";

const ImagePropType = PropTypes.shape({
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
});

const PartnersAndSponsorsBlock = ({
  title,
  mohcdLogo,
  justiceAndDiversityCenterLogo,
  benetechLogo,
  larkinStreetLogo,
  sfFamiliesLogo,
  ciscoLogo,
  pagerdutyLogo,
  uberLogo,
}) => {
  const GridAreaLeft = () => (
    <div className={s.gridAreaLeft}>
      <h1 className={s.title}>{title}</h1>
    </div>
  );

  const GridAreaRight = () => (
    <div className={s.gridAreaRight}>
      <div>
        <img src={mohcdLogo.url} alt={mohcdLogo.alt} />
        <img
          src={justiceAndDiversityCenterLogo.url}
          alt={justiceAndDiversityCenterLogo.alt}
        />
        <img src={benetechLogo.url} alt={benetechLogo.alt} />
        <img src={larkinStreetLogo.url} alt={larkinStreetLogo.alt} />
        <img src={sfFamiliesLogo.url} alt={sfFamiliesLogo.alt} />
        <img src={ciscoLogo.url} alt={ciscoLogo.alt} />
        <img src={pagerdutyLogo.url} alt={pagerdutyLogo.alt} />
        <img src={uberLogo.url} alt={uberLogo.alt} />
      </div>
    </div>
  );

  return (
    <div>
      <section className={s.gridParent}>
        <GridAreaLeft />
        <GridAreaRight />
      </section>
    </div>
  );
};

PartnersAndSponsorsBlock.propTypes = {
  title: PropTypes.string.isRequired,
  mohcdLogo: ImagePropType.isRequired,
  justiceAndDiversityCenterLogo: ImagePropType.isRequired,
  benetechLogo: ImagePropType.isRequired,
  larkinStreetLogo: ImagePropType.isRequired,
  sfFamiliesLogo: ImagePropType.isRequired,
  ciscoLogo: ImagePropType.isRequired,
  pagerdutyLogo: ImagePropType.isRequired,
  uberLogo: ImagePropType.isRequired,
};

export default PartnersAndSponsorsBlock;

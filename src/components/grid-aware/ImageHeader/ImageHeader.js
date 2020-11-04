import PropTypes from "prop-types";
import React from "react";

import Button from "../../inline/Button";

import s from "./ImageHeader.module.css";

const ImagePropType = PropTypes.shape({
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
});

const ImageHeader = ({
  title,
  subtitle,
  description,
  image1,
  image2,
  ctaButton,
}) => {
  const GridAreaLeft = () => (
    <div className={s.gridAreaLeft}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.subtitle}>{subtitle}</div>
      <div className={s.description}>{description}</div>
      <div className={s.ctaButton}>
        {ctaButton.map((button) => (
          <div key={button.text}>
            <Button
              text={button.text}
              internalLink={button.internalLink}
              externalLink={button.externalLink}
              onClick={button.onClick}
            />
          </div>
        ))}
      </div>
    </div>
  );

  const GridAreaRight = () => (
    <div className={s.gridAreaRight}>
      <div className={s.image1Wrapper}>
        <img src={image1.url} alt={image1.alt} />
      </div>
      <div className={s.image2Wrapper}>
        <img src={image2.url} alt={image2.alt} />
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

ImageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image1: ImagePropType.isRequired,
  image2: ImagePropType.isRequired,
  ctaButton: PropTypes.arrayOf(Button.propTypes).isRequired,
};

export default ImageHeader;

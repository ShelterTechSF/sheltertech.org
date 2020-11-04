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
      <h1 className={s.titleWrapper}>{title}</h1>
      <div className={s.subtitleWrapper}>{subtitle}</div>
      <div className={s.descriptionWrapper}>{description}</div>
      <div className={s.ctaButtonWrapper}>
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

  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedMainContent}>
        <section className={s.gridParent}>
          <div className={s.gridAreaRight}>
            <div className={s.image1Wrapper}>
              <img className={s.image} src={image1.url} alt={image1.alt} />
            </div>
          </div>
          <GridAreaLeft />
          <div className={s.gridAreaRight}>
            <div className={s.image2Wrapper}>
              <img className={s.image} src={image2.url} alt={image2.alt} />
            </div>
          </div>
        </section>
      </div>
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

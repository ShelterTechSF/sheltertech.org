import PropTypes from "prop-types";
import React from "react";

import { ImagePropType } from "../../../PropTypeShapes";
import Button from "../../inline/Button";

import s from "./ImageHeader.module.css";

const ImageHeader = ({
  title,
  subtitle,
  description,
  image1,
  image2,
  ctaButtons,
}) => {
  const GridAreaLeft = () => (
    <div className={s.gridAreaText}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.subtitle}>{subtitle}</div>
      <div className={s.description}>{description}</div>
      <div className={s.ctaButtonRow}>
        {ctaButtons.map((button) => (
          <div className={s.ctaButtonRowItem} key={button.text}>
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
          <div className={s.gridAreaImage1}>
            <div className={s.image1Wrapper}>
              <img className={s.image} src={image1.url} alt={image1.alt} />
            </div>
          </div>
          <GridAreaLeft />
          <div className={s.gridAreaImage2}>
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
  ctaButtons: PropTypes.arrayOf(PropTypes.shape(Button.propTypes)).isRequired,
};

export default ImageHeader;

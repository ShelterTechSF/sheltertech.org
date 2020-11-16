import PropTypes from "prop-types";
import React from "react";

import {
  ImagePropType,
  TitleDescriptionPropType,
} from "../../../PropTypeShapes";
import Button from "../../inline/Button";

import s from "./ThreeParagraphBlock.module.css";

/* Subcomponents */

const ParagraphBlock = ({ title, description }) => (
  <div>
    <div className={s.paragraphTitle}>{title}</div>
    <div className={s.paragraphDescription}>{description}</div>
  </div>
);

ParagraphBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const CTABlock = ({ title, buttons }) => (
  <div>
    <div className={s.ctaTitleBlock}>
      <div className={s.ctaTitle}>{title}</div>
    </div>
    <div className={s.ctaButtonRow}>
      {buttons.map(({ text, internalLink, externalLink, onClick }) => (
        <div className={s.ctaButtonRowItem} key={text}>
          <Button {...{ text, internalLink, externalLink, onClick }} />
        </div>
      ))}
    </div>
  </div>
);

CTABlock.propTypes = {
  title: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(Button.propTypes).isRequired,
};

/* Main component */

const ThreeParagraphBlock = ({
  title,
  paragraph1,
  paragraph2,
  paragraph3,
  image1,
  image2,
  image3,
  ctaTitle,
  ctaButtons,
}) => {
  const GridAreaLeft = () => (
    <div className={s.gridAreaLeft}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.image1Wrapper}>
        <img src={image1.url} alt={image1.alt} />
      </div>
      <div className={s.image2Wrapper}>
        <img src={image2.url} alt={image2.alt} />
      </div>
    </div>
  );

  const GridAreaMiddle = () => (
    <div className={s.gridAreaMiddle}>
      <div className={s.paragraph1Wrapper}>
        <ParagraphBlock
          title={paragraph1.title}
          description={paragraph1.description}
        />
      </div>
      <div className={s.paragraph2Wrapper}>
        <ParagraphBlock
          title={paragraph2.title}
          description={paragraph2.description}
        />
      </div>
    </div>
  );

  const GridAreaRight = () => (
    <div className={s.gridAreaRight}>
      <div className={s.paragraph3Wrapper}>
        <ParagraphBlock
          title={paragraph3.title}
          description={paragraph3.description}
        />
      </div>
      <div className={s.image3Wrapper}>
        <img src={image3.url} alt={image3.alt} />
      </div>
    </div>
  );

  const GridAreaBottom = () => (
    <div className={s.gridAreaBottom}>
      <CTABlock title={ctaTitle} buttons={ctaButtons} />
    </div>
  );

  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedBackground} />
      <div className={s.bleedMainContent}>
        <section className={s.gridParent}>
          <GridAreaLeft />
          <GridAreaMiddle />
          <GridAreaRight />
          <GridAreaBottom />
        </section>
      </div>
    </div>
  );
};

ThreeParagraphBlock.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph1: TitleDescriptionPropType.isRequired,
  paragraph2: TitleDescriptionPropType.isRequired,
  paragraph3: TitleDescriptionPropType.isRequired,
  image1: ImagePropType.isRequired,
  image2: ImagePropType.isRequired,
  image3: ImagePropType.isRequired,
  ctaTitle: PropTypes.string.isRequired,
  ctaButtons: PropTypes.arrayOf(Button.propTypes).isRequired,
};

export default ThreeParagraphBlock;

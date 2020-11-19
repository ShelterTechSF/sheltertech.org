import PropTypes from "prop-types";
import React from "react";

import Button from "../../inline/Button";

import s from "./ThreeParagraphBlock.module.css";

/* PropType shapes */

const ParagraphPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape(Button.propTypes).isRequired,
});

const ImagePropType = PropTypes.shape({
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
});

/* Subcomponents */

const ParagraphBlock = ({ title, description, button }) => {
  let hasButton;

  if (button) {
    hasButton = (
      <div className={s.ctaButton}>
        <Button
          text={button.text}
          internalLink={button.internalLink}
          externalLink={button.externalLink}
          onClick={button.onClick}
        />
      </div>
    );
  }

  return (
    <div>
      <div className={s.paragraphTitle}>{title}</div>
      <div className={s.paragraphDescription}>{description}</div>
      {hasButton}
    </div>
  );
};

ParagraphBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape(Button.propTypes).isRequired,
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
  image3 = {
    url: "",
    alt: "",
  },
  ctaTitle,
  ctaButtons,
}) => {
  let thirdImage;

  if (Object.keys(image3).length && image3.constructor === Object) {
    thirdImage = (
      <div className={s.image3Wrapper}>
        <img src={image3.url} alt={image3.alt} />
      </div>
    );
  }

  const GridAreaLeft = () => (
    <div className={s.gridAreaLeft}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.image1Wrapper}>
        <img className={s.image} src={image1.url} alt={image1.alt} />
      </div>
      {thirdImage}
    </div>
  );

  const GridAreaMiddle = () => (
    <div className={s.gridAreaMiddle}>
      <div className={s.paragraph1Wrapper}>
        <ParagraphBlock
          title={paragraph1.title}
          description={paragraph1.description}
          button={paragraph1.button}
        />
      </div>
      <div className={s.paragraph2Wrapper}>
        <ParagraphBlock
          title={paragraph2.title}
          description={paragraph2.description}
          button={paragraph2.button}
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
          button={paragraph3.button}
        />
      </div>
      <div className={s.image2Wrapper}>
        <img className={s.image} src={image2.url} alt={image2.alt} />
      </div>
    </div>
  );

  let GridAreaBottom;
  let { gridParent } = s;

  if (ctaTitle.length && ctaButtons.length) {
    GridAreaBottom = (
      <div className={s.gridAreaBottom}>
        <CTABlock title={ctaTitle} buttons={ctaButtons} />
      </div>
    );

    gridParent = s.gridParent2;
  }

  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedBackground} />
      <div className={s.bleedMainContent}>
        <section className={gridParent}>
          <GridAreaLeft />
          <GridAreaMiddle />
          <GridAreaRight />
          {GridAreaBottom}
        </section>
      </div>
    </div>
  );
};

ThreeParagraphBlock.defaultProps = {
  image3: {
    url: "",
    alt: "",
  },
};

ThreeParagraphBlock.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph1: ParagraphPropType.isRequired,
  paragraph2: ParagraphPropType.isRequired,
  paragraph3: ParagraphPropType.isRequired,
  image1: ImagePropType.isRequired,
  image2: ImagePropType.isRequired,
  image3: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
  }),
  ctaTitle: PropTypes.string.isRequired,
  ctaButtons: PropTypes.arrayOf(Button.propTypes).isRequired,
};

export default ThreeParagraphBlock;

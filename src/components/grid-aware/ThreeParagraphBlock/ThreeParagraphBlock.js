import PropTypes from "prop-types";
import React from "react";

import Button from "../../inline/Button";

import s from "./ThreeParagraphBlock.module.css";

/* PropType shapes */

const ParagraphPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.oneOfType([
    PropTypes.exact({
      text: PropTypes.string,
      externalLink: PropTypes.string,
    }),
    PropTypes.exact({
      text: PropTypes.string,
      internalLink: PropTypes.string,
    }),
    PropTypes.exact({
      text: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ]),
});

const ImagePropType = PropTypes.shape({
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
});

/* Subcomponents */

const ParagraphBlock = ({ title, description, button }) => {
  let buttonWrapper;

  if (button) {
    buttonWrapper = (
      <div className={s.paragraphCTAButton}>
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
      {buttonWrapper}
    </div>
  );
};

ParagraphBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.oneOfType([
    PropTypes.exact({
      text: PropTypes.string,
      externalLink: PropTypes.string,
    }),
    PropTypes.exact({
      text: PropTypes.string,
      internalLink: PropTypes.string,
    }),
    PropTypes.exact({
      text: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ]),
};

ParagraphBlock.defaultProps = {
  button: null,
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
  buttons: PropTypes.arrayOf({
    text: PropTypes.string.isRequired,
    noHover: PropTypes.bool,
    externalLink: PropTypes.string.isRequired,
    internalLink: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }).isRequired,
};

/* Main component */

const ThreeParagraphBlock = ({
  title,
  paragraph1,
  paragraph2,
  paragraph3,
  leftTopImage,
  leftBottomImage,
  rightImage,
  ctaTitle,
  ctaButtons,
}) => {
  let optionalLeftTopImage;
  let leftBottomImageWrapperClassName = s.leftBottomImageWrapper;

  if (leftTopImage) {
    optionalLeftTopImage = (
      <div className={s.leftTopImageWrapper}>
        <img
          className={s.image}
          src={leftTopImage.url}
          alt={leftTopImage.alt}
        />
      </div>
    );

    leftBottomImageWrapperClassName += ` ${s.solo}`;
  } else {
    leftBottomImageWrapperClassName += ` ${s.paired}`;
  }

  const GridAreaLeft = () => (
    <div className={s.gridAreaLeft}>
      <h1 className={s.title}>{title}</h1>
      {optionalLeftTopImage}
      <div className={leftBottomImageWrapperClassName}>
        <img
          className={s.image}
          src={leftBottomImage.url}
          alt={leftBottomImage.alt}
        />
      </div>
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
      <div className={s.rightImageWrapper}>
        <img className={s.image} src={rightImage.url} alt={rightImage.alt} />
      </div>
    </div>
  );

  const GridAreaBottom = () => {
    if (!ctaTitle || !ctaButtons) {
      return null;
    }

    return (
      <div className={s.gridAreaBottom}>
        <CTABlock title={ctaTitle} buttons={ctaButtons} />
      </div>
    );
  };

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
  paragraph1: ParagraphPropType.isRequired,
  paragraph2: ParagraphPropType.isRequired,
  paragraph3: ParagraphPropType.isRequired,
  leftBottomImage: ImagePropType.isRequired,
  rightImage: ImagePropType.isRequired,
  leftTopImage: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
  }),
  ctaTitle: PropTypes.string,
  ctaButtons: PropTypes.arrayOf(Button.propTypes),
};

ThreeParagraphBlock.defaultProps = {
  leftTopImage: null,
  ctaTitle: null,
  ctaButtons: null,
};

export default ThreeParagraphBlock;

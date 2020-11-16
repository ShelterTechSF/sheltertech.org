import PropTypes from "prop-types";
import React from "react";

import Button from "../../inline/Button";

import s from "./ThreeParagraphBlock.module.css";

/* PropType shapes */

const ParagraphPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

const ImagePropType = PropTypes.shape({
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
});

/* Subcomponents */

const ParagraphBlock = ({ title, description, button }) => (
  <div>
    <div className={s.paragraphTitle}>{title}</div>
    <div className={s.paragraphDescription}>{description}</div>
    <div className={s.ctaButtonRow}>{button}</div>
  </div>
);

ParagraphBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape(Button.propTypes).isRequired,
};

/* Main component */

const ThreeParagraphBlock = ({
  title,
  paragraph1,
  paragraph2,
  paragraph3,
  image1,
  image2,
  ctaButtons,
}) => {
  const Buttons = ctaButtons.map(
    ({ text, internalLink, externalLink, onClick }) => (
      <div className={s.ctaButtonRowItem} key={text}>
        <Button {...{ text, internalLink, externalLink, onClick }} />
      </div>
    )
  );

  const GridAreaLeft = () => (
    <div className={s.gridAreaLeft}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.image1Wrapper}>
        <img className={s.image} src={image1.url} alt={image1.alt} />
      </div>
    </div>
  );

  const GridAreaMiddle = () => (
    <div className={s.gridAreaMiddle}>
      <div className={s.paragraph1Wrapper}>
        <ParagraphBlock
          title={paragraph1.title}
          description={paragraph1.description}
          button={Buttons[0]}
        />
      </div>
      <div className={s.paragraph2Wrapper}>
        <ParagraphBlock
          title={paragraph2.title}
          description={paragraph2.description}
          button={Buttons[1]}
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
          button={Buttons[2]}
        />
      </div>
      <div className={s.image2Wrapper}>
        <img className={s.image} src={image2.url} alt={image2.alt} />
      </div>
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
  image1: ImagePropType.isRequired,
  image2: ImagePropType.isRequired,
  ctaTitle: PropTypes.string.isRequired,
  ctaButtons: PropTypes.arrayOf(Button.propTypes).isRequired,
};

export default ThreeParagraphBlock;

import PropTypes from "prop-types";
import React from "react";

import Button from "../../inline/Button";

import s from "./TwoParagraphBlock.module.css";

/* PropType shapes */

const ImagePropType = PropTypes.shape({
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
});

/* Main component */

const TwoParagraphBlock = ({
  title,
  paragraph1,
  paragraph2,
  image,
  ctaButtons,
}) => {
  const GridAreaTitle = () => (
    <div className={s.gridAreaTitle}>
      <h1 className={s.title}>{title}</h1>
    </div>
  );

  const GridAreaParagraph1 = () => (
    <div className={s.gridAreaParagraph1}>
      <div className={s.paragraph1Wrapper}>{paragraph1}</div>
    </div>
  );

  const GridAreaParagraph2 = () => (
    <div className={s.gridAreaParagraph2}>
      <div className={s.paragraph2Wrapper}>{paragraph2}</div>
      <div className={s.ctaButtonRow}>
        {ctaButtons.map((button) => (
          <div className={s.ctaButtonItem} key={button.text}>
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

  const GridAreaImage = () => (
    <div className={s.gridAreaImage}>
      <div className={s.image1Wrapper}>
        <img className={s.image1} src={image.url} alt={image.alt} />
      </div>
    </div>
  );

  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedBackground} />
      <div className={s.bleedMainContent}>
        <section className={s.gridParent}>
          <GridAreaTitle />
          <GridAreaParagraph1 />
          <GridAreaImage />
          <GridAreaParagraph2 />
        </section>
      </div>
    </div>
  );
};

TwoParagraphBlock.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph1: PropTypes.string.isRequired,
  paragraph2: PropTypes.node.isRequired,
  image: ImagePropType.isRequired,
  ctaButtons: PropTypes.arrayOf(PropTypes.shape(Button.propTypes)).isRequired,
};

export default TwoParagraphBlock;

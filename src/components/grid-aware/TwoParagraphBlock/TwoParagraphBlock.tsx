import * as React from "react";

import Button, { ButtonProps } from "../../inline/Button";

import s from "./TwoParagraphBlock.module.css";

/* Main component */

type TwoParagraphBlockProps = {
  title: string;
  paragraph1: string;
  paragraph2: string;
  image: { url: string; alt: string };
  ctaButtons: ButtonProps[];
};

const TwoParagraphBlock = ({
  title,
  paragraph1,
  paragraph2,
  image,
  ctaButtons,
}: TwoParagraphBlockProps) => {
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

export default TwoParagraphBlock;

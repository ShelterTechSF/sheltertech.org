import * as React from "react";

import Button, { ButtonProps } from "../../inline/Button";

import * as s from "./TwoParagraphBlock.module.css";

/* Main component */
type TwoParagraphBlockProps = {
  isAbout?: boolean;
  title: string;
  paragraph1?: React.ReactNode;
  paragraph2?: React.ReactNode;
  image: { url: string; alt: string };
  ctaButtons?: ButtonProps[];
};

const TwoParagraphBlock = ({
  isAbout,
  title,
  paragraph1,
  paragraph2,
  image,
  ctaButtons,
}: TwoParagraphBlockProps) => {
  const gridParent = isAbout ? s.gridParentAbout : s.gridParent;
  const gridAreaImage = isAbout ? s.gridAreaImageAbout : s.gridAreaImage;
  const paragraph2Wrapper = isAbout
    ? s.paragraph2WrapperAbout
    : s.paragraph2Wrapper;
  const gridAreaParagraph2 = isAbout
    ? `${s.gridAreaParagraph2} ${s.gridAreaParagraph2About}`
    : s.gridAreaParagraph2;

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

  const isCtaButtons = ctaButtons && (
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
  );

  const GridAreaParagraph2 = () => (
    <div className={gridAreaParagraph2}>
      <div className={paragraph2Wrapper}>{paragraph2}</div>
      {isCtaButtons}
    </div>
  );

  const GridAreaImage = () => (
    <div className={gridAreaImage}>
      <div className={s.image1Wrapper}>
        <img className={s.image1} src={image.url} alt={image.alt} />
      </div>
    </div>
  );

  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedBackground} />
      <div className={s.bleedMainContent}>
        <section className={gridParent}>
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

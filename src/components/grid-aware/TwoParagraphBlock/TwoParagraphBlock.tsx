import * as React from "react";

import { ThemeColorOption } from "../../../types";
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
  theme: ThemeColorOption;
};

const TwoParagraphBlock = ({
  isAbout,
  title,
  paragraph1,
  paragraph2,
  image,
  ctaButtons,
  theme,
}: TwoParagraphBlockProps) => {
  const gridAreaImage = isAbout ? s.gridAreaImageAbout : s.gridAreaImage;
  const aboutUsPageClass = isAbout ? s.aboutUsPage : "";

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
    <div className={s.gridAreaParagraph2}>
      <div className={`${s.paragraph2Wrapper} ${aboutUsPageClass}`}>
        {paragraph2}
      </div>
      {isCtaButtons}
    </div>
  );

  const GridAreaImage = () => (
    <div className={gridAreaImage}>
      <div className={`${s.image1Wrapper} ${aboutUsPageClass}`}>
        <img className={s.image1} src={image.url} alt={image.alt} />
      </div>
    </div>
  );

  return (
    <div className={s.bleedWrapper}>
      <div className={`${s.bleedBackground} ${s[theme]}`} />
      <div className={s.bleedMainContent}>
        <section className={s.gridParent}>
          <GridAreaTitle />
          {paragraph1 && <GridAreaParagraph1 />}
          <GridAreaImage />
          <GridAreaParagraph2 />
        </section>
      </div>
    </div>
  );
};

export default TwoParagraphBlock;

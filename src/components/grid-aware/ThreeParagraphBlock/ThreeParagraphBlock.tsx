import * as React from "react";

import Button, { ButtonProps } from "../../inline/Button";

import * as s from "./ThreeParagraphBlock.module.css";

/* Subcomponents */

type ParagraphBlockProps = {
  title: string;
  description: string;
  button?: ButtonProps;
};

const ParagraphBlock = ({
  title,
  description,
  button,
}: ParagraphBlockProps) => {
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

type CTABlockProps = {
  title: string;
  buttons: ButtonProps[];
};

const CTABlock = ({ title, buttons }: CTABlockProps) => (
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

/* Main component */

type ImageProps = {
  url: string;
  alt: string;
};

type ThreeParagraphBlockProps = {
  title: string;
  paragraph1: ParagraphBlockProps;
  paragraph2: ParagraphBlockProps;
  paragraph3: ParagraphBlockProps;
  leftBottomImage: ImageProps;
  leftTopImage?: ImageProps;
  ctaTitle?: string;
  ctaButtons?: ButtonProps[];
};

const ThreeParagraphBlock = ({
  title,
  paragraph1,
  paragraph2,
  paragraph3,
  leftTopImage,
  leftBottomImage,
  ctaTitle,
  ctaButtons,
}: ThreeParagraphBlockProps) => {
  let optionalLeftTopImage: JSX.Element;
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

    leftBottomImageWrapperClassName += ` ${s.paired}`;
  } else {
    leftBottomImageWrapperClassName += ` ${s.solo}`;
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

  const GridAreaRight = () => (
    <div className={s.gridAreaRight}>
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
      <div className={s.paragraph3Wrapper}>
        <ParagraphBlock
          title={paragraph3.title}
          description={paragraph3.description}
          button={paragraph3.button}
        />
      </div>
      {!ctaTitle || !ctaButtons ? null : (
        <div className={s.gridAreaBottom}>
          <CTABlock title={ctaTitle} buttons={ctaButtons} />
        </div>
      )}
    </div>
  );

  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedBackground} />
      <div className={s.bleedMainContent}>
        <section className={s.gridParent}>
          <GridAreaLeft />
          <GridAreaRight />
        </section>
      </div>
    </div>
  );
};

export default ThreeParagraphBlock;

import * as React from "react";
import Button, { ButtonProps } from "../../inline/Button";
import * as s from "./ProgramBlock.module.css";

type ImageProps = {
  url: string;
  alt: string;
};

type ProgramBlockProps = {
  title: string;
  subtitle?: string;
  description: React.ReactNode;
  image: ImageProps;
  ctaButtons: ButtonProps[];
};

const ProgramBlock = ({
  title,
  subtitle,
  description,
  image,
  ctaButtons,
}: ProgramBlockProps) => {
  const GridAreaRight = () => (
    <div className={s.gridAreaText}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.subtitle}>{subtitle}</div>
      <div className={s.description}>{description}</div>
      <div className={s.ctaButtonRow}>
        {ctaButtons.map((button) => (
          <Button
            key={button.text}
            text={button.text}
            internalLink={button.internalLink}
            externalLink={button.externalLink}
            onClick={button.onClick}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedMainContent}>
        <section className={s.gridParent}>
          <div className={s.gridAreaImage}>
            <img className={s.image} src={image.url} alt={image.alt} />
          </div>
          <GridAreaRight />
        </section>
      </div>
    </div>
  );
};

export default ProgramBlock;

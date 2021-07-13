import * as React from "react";
import Button, { ButtonProps } from "../../inline/Button";
import * as s from "./CommunityRepProgramBlock.module.css";

type CommunityRepProgramProps = {
  url: string;
  alt: string;
};

type CommunityRepProgramBlockProps = {
  title: string;
  subtitle: string;
  description: string;
  bullet1: string;
  bullet2: string;
  image: CommunityRepProgramProps;
  ctaButtons: ButtonProps[];
};

const CommunityRepProgramBlock = ({
  title,
  subtitle,
  description,
  bullet1,
  bullet2,
  image,
  ctaButtons,
}: CommunityRepProgramBlockProps) => {
  const GridAreaRight = () => (
    <div className={s.gridAreaText}>
      <div className={s.title}>{title}</div>
      <div className={s.subtitle}>{subtitle}</div>
      <div className={s.description}>{description}</div>
      <ul className={s.bullet}>
        <li>{bullet1}</li>
        <li>{bullet2}</li>
      </ul>
      <div className={s.ctaButtonRow}>
        {ctaButtons.map((button) => (
          <div className={s.ctaButtonRowItem} key={button.text}>
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

  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedMainContent}>
        <section className={s.gridParent}>
          <GridAreaRight />
          <div className={s.gridAreaImage}>
            <img className={s.image} src={image.url} alt={image.alt} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommunityRepProgramBlock;

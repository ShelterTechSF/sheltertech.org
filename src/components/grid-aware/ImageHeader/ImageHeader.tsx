import * as React from "react";
import Button, { ButtonProps } from "../../inline/Button";
import * as s from "./ImageHeader.module.css";

type ImageProps = {
  url: string;
  alt: string;
};

type ImageHeaderProps = {
  title: string;
  subtitle: string;
  description: React.ReactNode;
  image1: ImageProps;
  image2?: ImageProps;
  ctaButtons?: ButtonProps[];
};

const ImageHeader = ({
  title,
  subtitle,
  description,
  image1,
  image2,
  ctaButtons,
}: ImageHeaderProps) => {
  const GridAreaLeft = () => (
    <div className={s.gridAreaText}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.subtitle}>{subtitle}</div>
      <div className={s.description}>{description}</div>
      <div className={s.ctaButtonRow}>
        {ctaButtons?.map((button) => (
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

  const isImage2 = image2 && (
    <div className={s.gridAreaImage2}>
      <div className={s.image2Wrapper}>
        <img className={s.image} src={image2.url} alt={image2.alt} />
      </div>
    </div>
  );

  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedMainContent}>
        <section className={s.gridParent}>
          <div className={s.gridAreaImage1}>
            <div className={s.image1Wrapper}>
              <img className={s.image} src={image1.url} alt={image1.alt} />
            </div>
          </div>
          <GridAreaLeft />
          {isImage2}
        </section>
      </div>
    </div>
  );
};

export default ImageHeader;

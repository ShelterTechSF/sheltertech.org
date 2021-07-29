import * as React from "react";
import Button, { ButtonProps } from "../../inline/Button";
import * as s from "./ImageHeader.module.css";

type ImageProps = {
  url: string;
  alt: string;
};

type ImageHeaderProps = {
  isAbout?: boolean;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  image1: ImageProps;
  image2: ImageProps;
  ctaButtons?: ButtonProps[];
};

const ImageHeader = ({
  title,
  subtitle,
  description,
  image1,
  image2,
  ctaButtons,
  isAbout,
}: ImageHeaderProps) => {
  const gridAreaImage1 = `${
    isAbout ? s.gridAreaImage1About : s.gridAreaImage1
  }`;
  const gridAreaImage2 = `${
    isAbout ? s.gridAreaImage2About : s.gridAreaImage2
  }`;
  const image1Wrapper = `${isAbout ? s.image1WrapperAbout : s.image1Wrapper}`;
  const image2Wrapper = `${isAbout ? s.image2WrapperAbout : s.image2Wrapper}`;

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

  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedMainContent}>
        <section className={s.gridParent}>
          <div className={gridAreaImage1}>
            <div className={image1Wrapper}>
              <img className={s.image} src={image1.url} alt={image1.alt} />
            </div>
          </div>
          <GridAreaLeft />
          <div className={gridAreaImage2}>
            <div className={image2Wrapper}>
              <img className={s.image} src={image2.url} alt={image2.alt} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ImageHeader;

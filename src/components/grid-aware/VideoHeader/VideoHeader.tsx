import * as React from "react";
import Button, { ButtonProps } from "../../inline/Button";

import s from "./VideoHeader.module.css";

type CTAButtonsProps = {
  buttons: ButtonProps[];
};

const CTAButtons = ({ buttons }: CTAButtonsProps) => (
  <div className={s.ctaButtons}>
    {buttons.map((button) => (
      <div className={s.ctaButton} key={button.text}>
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

const VideoHeaderText = ({ title, description }: VideoHeaderTextProps) => (
  <div className={s.videoHeaderText}>
    <div className={s.title}>{title}</div>
    <div className={s.description}>{description}</div>
  </div>
);

type VideoHeaderTextProps = {
  title: string;
  description: string;
};

const PlayButton = ({ onClick, playIcon }: PlayButtonProps) => (
  <button className={s.playButton} type="button" onClick={onClick}>
    <img className={s.playIcon} src={playIcon.url} alt={playIcon.alt} />
  </button>
);

type ImageProps = {
  url: string;
  alt: string;
};

type PlayButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  playIcon: ImageProps;
};

/* Main component */

const VideoHeader = ({
  ctaButtons,
  image,
  playButtonOnClick,
  title,
  description,
  playIcon,
}: VideoHeaderProps) => {
  return (
    <div className={s.bleedWrapper}>
      <div
        className={s.bleedBackground}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className={s.bleedMainContent}>
        <section className={s.gridParent}>
          <div className={s.gridPlayButtonArea}>
            <PlayButton onClick={playButtonOnClick} playIcon={playIcon} />
          </div>
          <div className={s.gridTextArea}>
            <VideoHeaderText title={title} description={description} />
            <CTAButtons buttons={ctaButtons} />
          </div>
        </section>
      </div>
    </div>
  );
};

type VideoHeaderProps = {
  ctaButtons: ButtonProps[];
  image: string;
  playButtonOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  description: string;
  playIcon: ImageProps;
};

export default VideoHeader;

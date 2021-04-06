import * as React from "react";
import Button, { ButtonProps } from "../../inline/Button";
import playIcon from "./PlayIcon.svg";

import s from "./VideoHeader.module.css";

/* Subcomponents */

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

type VideoHeaderTextProps = {
  title: string;
  description: string;
};

const VideoHeaderText = ({ title, description }: VideoHeaderTextProps) => (
  <div className={s.videoHeaderText}>
    <div className={s.title}>{title}</div>
    <div className={s.description}>{description}</div>
  </div>
);

type PlayButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const PlayButton = ({ onClick }: PlayButtonProps) => (
  <button className={s.playButton} type="button" onClick={onClick}>
    <img className={s.playIcon} src={playIcon} alt="Play Video" />
  </button>
);

/* Main component */

type VideoHeaderProps = {
  ctaButtons: ButtonProps[];
  image: string;
  playButtonOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  description: string;
};

const VideoHeader = ({
  ctaButtons,
  image,
  playButtonOnClick,
  title,
  description,
}: VideoHeaderProps) => {
  return (
    <div className={s.bleedWrapper}>
      <div
        className={s.bleedBackground}
        style={
          {
            "--background-image": `url(${image})`,
          } as React.CSSProperties
        }
      />
      <div className={s.bleedMainContent}>
        <section className={s.gridParent}>
          <div className={s.gridPlayButtonArea}>
            <PlayButton onClick={playButtonOnClick} />
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

export default VideoHeader;

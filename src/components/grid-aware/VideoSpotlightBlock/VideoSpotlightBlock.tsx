import * as React from "react";
import Button, { ButtonProps } from "../../inline/Button";

import playIcon from "./PlayIcon.svg";
import s from "./VideoSpotlightBlock.module.css";

type TextCardProps = {
  eyebrowText: string;
  description: string;
  button: ButtonProps;
};

const TextCard = ({ eyebrowText, description, button }: TextCardProps) => (
  <div className={s.textCard}>
    <div className={s.eyebrowText}>{eyebrowText}</div>
    <div className={s.description}>{description}</div>
    <div className={s.actionRow}>
      <Button
        text={button.text}
        internalLink={button.internalLink}
        externalLink={button.externalLink}
        onClick={button.onClick}
      />
    </div>
  </div>
);

type VideoSpotlightBlockProps = {
  eyebrowText: string;
  description: string;
  button: ButtonProps;
  imageURL: string;
  playButtonOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  blackBackground?: boolean;
};

const VideoSpotlightBlock = ({
  eyebrowText,
  description,
  button,
  imageURL,
  playButtonOnClick,
  blackBackground = false,
}: VideoSpotlightBlockProps) => {
  const bleedBackgroundWrapper = `${s.bleedWrapper} ${
    blackBackground ? s.blackBackground : ""
  }`;

  return (
    <div className={bleedBackgroundWrapper}>
      <div className={s.bleedImageWrapper}>
        <div
          className={s.bleedImage}
          style={
            { "--background-image": `url(${imageURL})` } as React.CSSProperties
          }
        >
          <button
            className={s.playButton}
            onClick={playButtonOnClick}
            type="button"
          >
            <img className={s.playIcon} src={playIcon} alt="Play Video" />
          </button>
        </div>
      </div>
      <div className={s.bleedMainContent}>
        <div className={s.gridParent}>
          <div className={s.gridAreaCard}>
            <div className={s.textCardWrapper}>
              <TextCard
                eyebrowText={eyebrowText}
                description={description}
                button={button}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSpotlightBlock;

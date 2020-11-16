import PropTypes from "prop-types";
import React from "react";

import { ImagePropType } from "../../../PropTypeShapes";
import Button from "../../inline/Button";
import playIcon from "./PlayIcon.svg";

import s from "./VideoSpotlightBlock.module.css";

const TextCard = ({ eyebrowText, description, button }) => (
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

TextCard.propTypes = {
  eyebrowText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape(Button.propTypes).isRequired,
};

const VideoSpotlightBlock = ({
  eyebrowText,
  description,
  button,
  image,
  playButtonLink,
}) => (
  <div className={s.bleedWrapper}>
    <div className={s.bleedImage}>
      <div className={s.playButton}>
        <a rel="noreferrer" href={playButtonLink} target="_blank">
          <img className={s.playIcon} src={playIcon} alt="Play Video" />
        </a>
      </div>
      <img className={s.image} src={image.url} alt={image.alt} />
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

VideoSpotlightBlock.propTypes = {
  eyebrowText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape(Button.propTypes).isRequired,
  image: ImagePropType.isRequired,
  playButtonLink: PropTypes.string.isRequired,
};

export default VideoSpotlightBlock;

import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
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
  imageURL,
  playButtonOnClick,
  blackBackground,
}) => {
  const bleedBackgroundWrapper = classNames(s.bleedWrapper, {
    [s.blackBackground]: blackBackground,
  });

  return (
    <div className={bleedBackgroundWrapper}>
      <div className={s.bleedImageWrapper}>
        <div
          className={s.bleedImage}
          style={{ "--background-image": `url(${imageURL})` }}
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

VideoSpotlightBlock.propTypes = {
  eyebrowText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape(Button.propTypes).isRequired,
  imageURL: PropTypes.string.isRequired,
  playButtonOnClick: PropTypes.func.isRequired,
  blackBackground: PropTypes.bool,
};

VideoSpotlightBlock.defaultProps = {
  blackBackground: false,
};

export default VideoSpotlightBlock;

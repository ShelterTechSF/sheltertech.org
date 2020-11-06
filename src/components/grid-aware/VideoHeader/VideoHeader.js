import PropTypes from "prop-types";
import React from "react";
import Button from "../../inline/Button";
import playIcon from "./PlayIcon.svg";
import s from "./VideoHeader.module.css";

/* Subcomponents */

const CTAButtons = ({ buttons }) => (
  <div className={s.ctaButtonRow}>
    {buttons.map((button) => (
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
);

CTAButtons.propTypes = {
  buttons: PropTypes.arrayOf(Button.propTypes).isRequired,
};

const VideoHeaderText = ({ title, description }) => (
  <div className={s.textContainer}>
    <div className={s.title}>{title}</div>
    <div className={s.description}>{description}</div>
  </div>
);

VideoHeaderText.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const PlayButton = ({ link }) => (
  <a rel="noreferrer" href={link} target="_blank">
    <img className={s.playIcon} src={playIcon} alt="Play Video" />
  </a>
);

PlayButton.propTypes = {
  link: PropTypes.string.isRequired,
};

/* Main component */

const VideoHeader = ({
  ctaButtons,
  image,
  playButtonLink,
  title,
  description,
}) => {
  const GridPlayButton = () => (
    <div className={s.gridPlayButton}>
      <PlayButton link={playButtonLink} />
    </div>
  );

  return (
    <div className={s.bleedWrapper}>
      <div
        className={s.bleedBackground}
        style={{
          "--background-image": `url(${image})`,
        }}
      />
      <div className={s.bleedMainContent}>
        <section className={s.gridParent}>
          <GridPlayButton />
          <div className={s.gridTextArea}>
            <VideoHeaderText title={title} description={description} />
            <CTAButtons buttons={ctaButtons} />
          </div>
        </section>
      </div>
    </div>
  );
};

VideoHeader.propTypes = {
  ctaButtons: PropTypes.arrayOf(Button.propTypes).isRequired,
  image: PropTypes.string.isRequired,
  playButtonLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default VideoHeader;

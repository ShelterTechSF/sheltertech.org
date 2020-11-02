import PropTypes from "prop-types";
import React from "react";
import Button from "../../inline/Button";
import playIcon from "./PlayIcon.svg";
import s from "./VideoHeader.module.css";

/* PropType shapes */

const VideoHeaderPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

/* Subcomponents */

const CTAButtons = ({ buttons }) => (
  <div className={s.ctaButtonRow}>
    {buttons.map((button) => (
      <div className={s.ctaButtonRowItem} key={button.text}>
        <Button text={button.text} internalLink={button.link} />
      </div>
    ))}
  </div>
);

CTAButtons.propTypes = {
  buttons: Button.propTypes.isRequired,
};

const VideoHeaderText = ({ text }) => (
  <div className={s.textContainer}>
    <div className={s.title}>{text.title}</div>
    <div className={s.description}>{text.description}</div>
  </div>
);

VideoHeaderText.propTypes = {
  text: VideoHeaderPropType.isRequired,
};

const PlayButton = ({ link }) => (
  <a rel="noreferrer" href={link} target="_blank">
    <img src={playIcon} alt="Play Video" className={s.playIcon} />
  </a>
);

PlayButton.propTypes = {
  link: PropTypes.string.isRequired,
};

/* Main component */

const VideoHeader = ({ ctaButtons, image, link, text }) => {
  const GridPlayButton = () => (
    <div className={s.gridPlayButton}>
      <PlayButton link={link} />
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
            <VideoHeaderText text={text} />
            <CTAButtons buttons={ctaButtons} />
          </div>
        </section>
      </div>
    </div>
  );
};

VideoHeader.propTypes = {
  ctaButtons: PropTypes.arrayOf(CTAButtons).isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default VideoHeader;

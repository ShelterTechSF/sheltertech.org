import PropTypes from "prop-types";
import React from "react";
import Button from "../../inline/Button";
import playButton from "./PlayButton.svg";
import s from "./VideoHeader.module.css";

const style = {};
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
    <img src={playButton} alt="Play Video" />
  </a>
);

PlayButton.propTypes = {
  link: PropTypes.string.isRequired,
};

/* Main component */

const VideoHeader = ({ ctaButtons, image, link, text }) => {
  const GridAreaRight = () => (
    <div className={s.gridAreaRight}>
      <PlayButton link={link} />
    </div>
  );

  return (
    <div
      className={s.bleedWrapper}
      style={{
        "--background-image": `url(${image})`,
      }}
    >
      <div className={s.bleedMainContent}>
        <section className={s.gridParent}>
          <div className={s.gridAreaLeft}>
            <VideoHeaderText text={text} />
            <CTAButtons buttons={ctaButtons} />
          </div>
          <GridAreaRight />
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

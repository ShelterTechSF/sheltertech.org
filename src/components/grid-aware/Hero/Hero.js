import PropTypes from "prop-types";
import React from "react";
import Button from "../../inline/Button";
import s from "./Hero.module.css";
import Shape from "./Shape.svg";

/* PropType shapes */

const CTAButtonPropType = PropTypes.shape({
  text: PropTypes.string.isRequired,
});

const HeroTextPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

/* Subcomponents */

const CTAButtons = ({ buttons }) => (
  <div className={s.ctaButtonBlock}>
    {buttons.map((button) => (
      <Button key={button.text}>{button.text}</Button>
    ))}
  </div>
);

CTAButtons.propTypes = {
  buttons: PropTypes.arrayOf(CTAButtonPropType).isRequired,
};

const HeroText = ({ text }) => (
  <div className={s.textContainer}>
    <div className={s.title}>{text.title}</div>
    <div className={s.description}>{text.description}</div>
  </div>
);

HeroText.propTypes = {
  text: PropTypes.arrayOf(HeroTextPropType).isRequired,
};

const PlayButton = ({ link }) => (
  <div className={s.playButtonContainer}>
    <a rel="noreferrer" href={link} target="_blank">
      <img src={Shape} alt="Play Button" className={s.playButton} />
    </a>
  </div>
);

PlayButton.propTypes = {
  link: PropTypes.string.isRequired,
};

/* Main component */

const Hero = ({ ctaButtons, heroImage, heroLink, heroText }) => {
  const GridAreaLeft = () => (
    <div className={s.gridAreaLeft}>
      <HeroText text={heroText} />
      <CTAButtons buttons={ctaButtons} />
    </div>
  );

  const GridAreaRight = () => (
    <div className={s.gridAreaRight}>
      <PlayButton link={heroLink} />
    </div>
  );

  return (
    <div
      className={s.bleedWrapper}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className={s.bleedMainContent}>
        <section className={s.gridParent}>
          <GridAreaLeft />
          <GridAreaRight />
        </section>
      </div>
    </div>
  );
};

Hero.propTypes = {
  ctaButtons: PropTypes.arrayOf(CTAButtonPropType).isRequired,
  heroImage: PropTypes.string.isRequired,
  heroLink: PropTypes.string.isRequired,
  heroText: PropTypes.arrayOf(HeroTextPropType).isRequired,
};

export default Hero;

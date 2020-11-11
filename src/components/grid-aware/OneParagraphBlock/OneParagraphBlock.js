import PropTypes from "prop-types";
import React from "react";

import Button from "../../inline/Button";

import s from "./OneParagraphBlock.module.css";

const OneParagraphBlock = ({ title, jobs, ctaButtons }) => {
  const GridAreaLeft = () => (
    <div className={s.gridAreaLeft}>
      <div className={s.title}>{title}</div>
    </div>
  );

  const GridAreaRight = () => (
    <div className={s.gridAreaRight}>
      <div className={s.jobsWrapper}>
        <div className={s.jobs}>{jobs}</div>
        <div className={s.ctaButtonRow}>
          {ctaButtons.map((button) => (
            <div className={s.ctaButtonItem} key={button.text}>
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
    </div>
  );

  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedBackground} />
      <div className={s.bleedMainContent}>
        <section className={s.gridParent}>
          <GridAreaLeft />
          <GridAreaRight />
        </section>
      </div>
    </div>
  );
};

OneParagraphBlock.propTypes = {
  title: PropTypes.string.isRequired,
  jobs: PropTypes.node.isRequired,
  ctaButtons: PropTypes.arrayOf(PropTypes.shape(Button.propTypes)).isRequired,
};

export default OneParagraphBlock;

import PropTypes from "prop-types";
import React from "react";

import Button from "../../inline/Button";

import s from "./OneParagraphBlock.module.css";

/* PropType shapes */

const JobPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

/* Subcomponents */

const JobBlock = ({ title, description }) => (
  <div className={s.jobItem}>
    <div className={s.jobTitle}>{title}</div>
    <div className={s.jobDescription}>{description}</div>
  </div>
);

JobBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const CTABlock = ({ button }) => (
  <div>
    <div className={s.ctaButtonWrapper}>
      {button.map(({ text, internalLink, externalLink, onClick }) => (
        <div key={text}>
          <Button {...{ text, internalLink, externalLink, onClick }} />
        </div>
      ))}
    </div>
  </div>
);

CTABlock.propTypes = {
  button: PropTypes.arrayOf(Button.propTypes).isRequired,
};

/* Main component */

const OneParagraphBlock = ({ title, job1, job2, job3, job4, ctaButton }) => {
  const GridAreaLeft = () => (
    <div className={s.gridAreaLeft}>
      <h1 className={s.title}>{title}</h1>
    </div>
  );

  const GridAreaRight = () => (
    <div className={s.gridAreaRight}>
      <div className={s.jobsWrapper}>
        <JobBlock title={job1.title} description={job1.description} />
        <JobBlock title={job2.title} description={job2.description} />
        <JobBlock title={job3.title} description={job3.description} />
        <JobBlock title={job4.title} description={job4.description} />
        <CTABlock button={ctaButton} />
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
  job1: JobPropType.isRequired,
  job2: JobPropType.isRequired,
  job3: JobPropType.isRequired,
  job4: JobPropType.isRequired,
  ctaButton: PropTypes.arrayOf(Button.propTypes).isRequired,
};

export default OneParagraphBlock;

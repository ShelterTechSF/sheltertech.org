import PropTypes from "prop-types";
import React from "react";

import ProgramCard from "../../block/ProgramCard";

import s from "./ProgramsBlock.module.css";

const ProgramsPropType = PropTypes.shape({
  theme: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

const ProgramsBlock = ({ title, programs }) => {
  const GridAreaTop = () => (
    <div className={s.gridAreaTop}>
      <h1 className={s.title}>{title}</h1>
    </div>
  );

  const GridAreaBottom = () => (
    <div className={s.gridAreaBottom}>
      <div className={s.programsWrapper}>
        {programs.map((program) => (
          <ProgramCard
            theme={program.theme}
            image={program.image}
            imageAlt={program.imageAlt}
            title={program.title}
            description={program.description}
            key={program.imageAlt}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className={s.bleedWrapper}>
      <section className={s.gridParent}>
        <GridAreaTop />
        <GridAreaBottom />
      </section>
    </div>
  );
};

ProgramsBlock.propTypes = {
  title: PropTypes.string.isRequired,
  programs: PropTypes.arrayOf(ProgramsPropType).isRequired,
};

export default ProgramsBlock;

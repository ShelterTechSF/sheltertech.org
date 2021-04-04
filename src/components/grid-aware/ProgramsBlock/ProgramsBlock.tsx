import * as React from "react";

import ProgramCard from "../../block/ProgramCard";

import s from "./ProgramsBlock.module.css";

type ProgramType = {
  theme: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
};

type ProgramsBlockProps = {
  title: string;
  programs: ProgramType[];
};

const ProgramsBlock = ({ title, programs }: ProgramsBlockProps) => {
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

export default ProgramsBlock;

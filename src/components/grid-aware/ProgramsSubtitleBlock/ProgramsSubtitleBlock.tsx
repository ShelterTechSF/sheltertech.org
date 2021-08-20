import * as React from "react";

import * as s from "./ProgramsSubtitleBlock.module.css";

type ProgramsSubtitleBlockProps = {
  title: string;
};

const ProgramsSubtitleBlock = ({ title }: ProgramsSubtitleBlockProps) => {
  const GridAreaLeft = () => (
    <div className={s.gridAreaLeft}>
      <h2 className={s.title}>{title}</h2>
    </div>
  );

  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedMainContent}>
        <section className={s.gridParent}>
          <GridAreaLeft />
        </section>
      </div>
    </div>
  );
};

export default ProgramsSubtitleBlock;

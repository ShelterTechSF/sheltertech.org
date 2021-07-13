import * as React from "react";

import Button, { ButtonProps } from "../../inline/Button";

import * as s from "./ProgramsSubTitleBlock.module.css";

type ProgramsSubTitleBlockProps = {
  title: string;
};

const ProgramsSubTitleBlock = ({
  title,
}: ProgramsSubTitleBlockProps) => {
  const GridAreaLeft = () => (
    <div className={s.gridAreaLeft}>
      <h1 className={s.title}>{title}</h1>
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

export default ProgramsSubTitleBlock;

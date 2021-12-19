import * as React from "react";

import { ThemeColorOption } from "../../../types";
import ProgramCard from "../../block/ProgramCard";
import type { ProgramCardProps } from "../../block/ProgramCard";

import * as s from "./ProgramsBlock.module.css";

type ProgramsBlockProps = {
  title: string;
  programs: ProgramCardProps[];
  theme: ThemeColorOption;
};

const ProgramsBlock = ({ title, programs, theme }: ProgramsBlockProps) => {
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
    <div className={`${s.bleedWrapper} ${s[theme]}`}>
      <section className={s.gridParent}>
        <GridAreaTop />
        <GridAreaBottom />
      </section>
    </div>
  );
};

export default ProgramsBlock;

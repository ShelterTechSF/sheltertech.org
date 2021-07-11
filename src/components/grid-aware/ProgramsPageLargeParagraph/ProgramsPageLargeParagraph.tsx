import * as React from "react";

import * as s from "./ProgramsPageLargeParagraph.module.css";

type ProgramsPageLargeParagraphProps = {
  title: string;
  description: string;
};

const ProgramsPageLargeParagraph = ({
  title,
  description,
}: ProgramsPageLargeParagraphProps) => {
  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedMainContent}>
        <div className={s.gridParent}>
          <div className={s.textWrapper}>
            {/* <div className={s.gridAreaTitle}> */}
            <div className={s.title}>{title}</div>
            {/* </div> */}
            {/* <div className={s.gridAreaDecsription}> */}
            <div className={s.description}>{description}</div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPageLargeParagraph;

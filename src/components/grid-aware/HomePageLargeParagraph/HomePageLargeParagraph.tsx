import * as React from "react";

import * as s from "./HomePageLargeParagraph.module.css";

type HomePageLargeParagraphProps = {
  title: string;
  description: string;
};

const HomePageLargeParagraph = ({
  title,
  description,
}: HomePageLargeParagraphProps) => {
  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedMainContent}>
        <div className={s.gridParent}>
          <div className={s.textWrapper}>
            <div className={s.title}>{title}</div>
            <div className={s.description}>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageLargeParagraph;

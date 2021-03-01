import * as React from "react";

import s from "./TitleBlock.module.css";

type TitleBlockProps = {
  title: string;
};

const TitleBlock = ({ title }: TitleBlockProps) => {
  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedMainContent}>
        <div className={s.title}>{title}</div>
      </div>
    </div>
  );
};

export default TitleBlock;

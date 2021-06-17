import * as React from "react";

import * as s from "./COVID19InfoBoxBlock.module.css";

type COVID19InfoBoxBlockProps = {
  title: string;
  description: string;
};

const COVID19InfoBoxBlock = ({
  title,
  description,
}: COVID19InfoBoxBlockProps) => {
  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedMainContent}>
        <div className={s.title}>{title}</div>
        <div className={s.description}>{description}</div>
      </div>
    </div>
  );
};

export default COVID19InfoBoxBlock;

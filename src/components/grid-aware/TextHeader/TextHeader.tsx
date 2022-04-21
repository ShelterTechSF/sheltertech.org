import * as React from "react";

import * as s from "./TextHeader.module.css";

type TextHeaderProps = {
  title: string;
  description: string;
  large?: boolean;
};

const TextHeader = ({ title, description, large }: TextHeaderProps) => {
  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedMainContent}>
        <div className={s.gridParent}>
          <div className={s.textWrapper}>
            <h1 className={s.title}>{title}</h1>
            <div className={`${s.description} ${large ? s.large : ""}`}>
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextHeader;

import * as React from "react";

import { ThemeColorOption } from "../../../types";
import Button, { ButtonProps } from "../../inline/Button";

import * as s from "./OneParagraphBlock.module.css";

type OneParagraphBlockProps = {
  title: string;
  descriptions: React.ReactNode;
  ctaButtons: ButtonProps[];
  theme: ThemeColorOption;
};

const OneParagraphBlock = ({
  title,
  descriptions,
  ctaButtons,
  theme,
}: OneParagraphBlockProps) => {
  const GridAreaLeft = () => (
    <div className={s.gridAreaLeft}>
      <h1 className={s.title}>{title}</h1>
    </div>
  );

  const GridAreaRight = () => (
    <div className={s.gridAreaRight}>
      <div className={s.descriptionsWrapper}>
        <div className={s.descriptions}>{descriptions}</div>
        <div className={s.ctaButtonRow}>
          {ctaButtons.map((button) => (
            <div className={s.ctaButtonItem} key={button.text}>
              <Button
                text={button.text}
                internalLink={button.internalLink}
                externalLink={button.externalLink}
                onClick={button.onClick}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`${s.bleedWrapper} ${s[theme]}`}>
      <div className={`${s.bleedBackground} ${s[theme]}`} />
      <div className={s.bleedMainContent}>
        <section className={s.gridParent}>
          <GridAreaLeft />
          <GridAreaRight />
        </section>
      </div>
    </div>
  );
};

export default OneParagraphBlock;

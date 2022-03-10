import * as React from "react";
import { ThemeColorOption, TitleColorOption } from "../../../types";

import * as s from "./StatsBarBlock.module.css";

type BarProps = {
  label: string | number;
  statistic: string | number;
};

type BarStatProps = {
  bars: BarProps[];
  title: string;
  subtitle: string;
  orientation: "vertical" | "horizontal";
};

const BarStatCard = ({ bars, title, subtitle, orientation }: BarStatProps) => (
  <div className={s.card}>
    <div className={`${s.barsContainer} ${s[orientation]}`}>
      {bars.map(({ label, statistic }, i) => {
        let barSize;

        switch (i) {
          case 0:
            barSize = "small";
            break;
          case 1:
            barSize = "medium";
            break;
          case 2:
            barSize = "large";
            break;
          default:
            barSize = "large";
        }

        return (
          <>
            <div className={`${s.label} ${s[orientation]}`}>{label}</div>
            <div className={`${s.barStatisticWrapper} ${s[orientation]}`}>
              <div className={`${s.bar} ${s[barSize]} ${s[orientation]}`} />
              <div className={`${s.statistic} ${s[orientation]}`}>
                {statistic}
              </div>
            </div>
          </>
        );
      })}
    </div>
    <div className={`${s.cardTitle} ${s[orientation]}`}>{title}</div>
    <div className={s.cardSubtitle}>{subtitle}</div>
  </div>
);

type StatsBarBlockProps = {
  title: string;
  subtitle?: React.ReactNode;
  barStatCards: BarStatProps[];
  theme: ThemeColorOption;
  titleColor?: TitleColorOption;
};

const StatsBlock = ({
  title,
  subtitle,
  barStatCards,
  theme,
  titleColor = "black",
}: StatsBarBlockProps) => (
  <div
    className={`${s.bleedWrapper} 
      ${s[theme]}`}
  >
    <div
      className={`${s.bleedBackground} 
        ${s[theme]}`}
    />
    <div className={s.bleedMainContent}>
      <section className={s.gridParent}>
        <h1 className={`${s.title} ${s[titleColor]}`}>{title}</h1>
        {subtitle && <h2 className={s.subtitle}>{subtitle}</h2>}
        <div className={s.gridAreaBottom}>
          {barStatCards.map((card) => (
            <BarStatCard
              key={card.title}
              bars={card.bars}
              title={card.title}
              subtitle={card.subtitle}
              orientation={card.orientation}
            />
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default StatsBlock;

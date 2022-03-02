import * as React from "react";
import { ThemeColorOption, TitleColorOption } from "../../../types";

import * as s from "./StatsBlock.module.css";

type StatCardProps = {
  number: string;
  secondaryNumber?: number;
  statement: string;
};

const StatCard = ({ number, secondaryNumber, statement }: StatCardProps) => (
  <div className={s.card}>
    <div className={s.number}>{number}</div>
    {secondaryNumber && (
      <div className={s.secondaryNumber}>{secondaryNumber}</div>
    )}
    <div className={s.statement}>{statement}</div>
  </div>
);

type AxisProp = {
  x: string | number;
  y: number;
};

type BarStatProps = {
  axes: AxisProp[];
  legend: { title: string; subtitle: string };
  position: string;
};

const BarStatCard = ({ axes, legend, position }: BarStatProps) => {
  const isVertical = position === "vertical";
  const statNumbers = axes.map((axis) => axis.y);
  const maxNumber = Math.max(...statNumbers);
  const fillPixels = statNumbers.map(
    (number) => `${Math.round((number / maxNumber) * 100)}px`
  );

  return (
    <div className={s.card}>
      <div className={`${s.barStat} ${s[position]}`}>
        {axes.map(({ x, y }, i) => {
          const isYMaxNumber = y === maxNumber;
          const yAxis = y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

          return (
            <div key={`${x}-${y}`} className={`${s.barItem} ${s[position]}`}>
              <div className={`${s.xAxis} ${s[position]}`}>{x}</div>
              <div
                style={{
                  width: isVertical ? "30px" : fillPixels[i],
                  height: isVertical ? fillPixels[i] : "30px",
                  backgroundColor: isYMaxNumber
                    ? "var(--color-sheltertech-blue)"
                    : "var(--color-gray-600)",
                  opacity: isYMaxNumber ? "" : "0.5",
                }}
              />
              <div className={`${s.yAxis} ${s[position]}`}>{yAxis}</div>
            </div>
          );
        })}
      </div>
      <div className={`${s.statement} ${s[position]}`}>{legend.title}</div>
      <div className={s.secondaryNumber}>{legend.subtitle}</div>
    </div>
  );
};

type StatsBlockProps = {
  title: string;
  subtitle?: string | React.ReactNode;
  barStatCards?: BarStatProps[];
  statCards?: StatCardProps[];
  theme: ThemeColorOption;
  titleColor?: TitleColorOption;
};

const StatsBlock = ({
  title,
  subtitle,
  barStatCards,
  statCards,
  theme,
  titleColor = "black",
}: StatsBlockProps) => (
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
          {statCards &&
            statCards.map(({ number, secondaryNumber, statement }) => (
              <StatCard
                key={statement}
                number={number}
                secondaryNumber={secondaryNumber}
                statement={statement}
              />
            ))}
          {barStatCards &&
            barStatCards.map(({ axes, legend, position }) => (
              <BarStatCard
                key={`${legend.title}-${legend.subtitle}`}
                axes={axes}
                legend={legend}
                position={position}
              />
            ))}
        </div>
      </section>
    </div>
  </div>
);

export default StatsBlock;

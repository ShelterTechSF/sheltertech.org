import * as React from "react";
import { ThemeColorOption, TitleColorOption } from "../../../types";

import * as s from "./StatsBlock.module.css";

type StatCardProps = {
  number: string;
  secondaryNumber?: number;
  statement: string;
};

const StatCard = ({ number, secondaryNumber, statement }: StatCardProps) => (
  <div className={s.statCard}>
    <div className={s.number}>{number}</div>
    {secondaryNumber && (
      <div className={s.secondaryNumber}>{secondaryNumber}</div>
    )}
    <div className={s.statement}>{statement}</div>
  </div>
);

type StatsBlockProps = {
  title: string;
  subtitle?: string;
  statCards: StatCardProps[];
  theme: ThemeColorOption;
  titleColor?: TitleColorOption;
};

const StatsBlock = ({
  title,
  subtitle,
  statCards,
  theme,
  titleColor,
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
        <h1
          className={`${s.title} ${
            subtitle && titleColor ? s[titleColor] : ""
          }`}
        >
          {title}
        </h1>
        {subtitle && <h2 className={s.subtitle}>{subtitle}</h2>}
        <div className={s.gridAreaBottom}>
          {statCards.map(({ number, secondaryNumber, statement }) => (
            <StatCard
              key={statement}
              number={number}
              secondaryNumber={secondaryNumber}
              statement={statement}
            />
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default StatsBlock;

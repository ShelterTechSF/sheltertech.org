import * as React from "react";

import * as s from "./StatsBlock.module.css";

type StatCardProps = {
  number: string;
  statement: string;
  theme?: string;
};

const StatCard = ({ number, statement, theme }: StatCardProps) => (
  <div className={s.statCard}>
    <div className={`${s.number} ${theme === "light" ? s.lightNumber : ""}`}>
      {number}
    </div>
    <div className={s.statement}>{statement}</div>
  </div>
);

type StatsBlockProps = {
  title: string;
  statCards: StatCardProps[];
  theme: string;
};

const StatsBlock = ({ title, statCards, theme }: StatsBlockProps) => (
  <div
    className={`${s.bleedWrapper} 
      ${theme === "light" ? s.light : s.dark}`}
  >
    <div
      className={`${s.bleedBackground} 
        ${theme === "light" ? s.light : s.dark}`}
    />
    <div className={s.bleedMainContent}>
      <section className={s.gridParent}>
        <h1 className={s.title}>{title}</h1>
        <div className={s.gridAreaBottom}>
          {statCards.map(({ number, statement }) => (
            <StatCard
              key={statement}
              number={number}
              statement={statement}
              theme={theme}
            />
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default StatsBlock;

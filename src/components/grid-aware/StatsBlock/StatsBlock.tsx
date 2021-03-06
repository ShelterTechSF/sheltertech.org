import * as React from "react";

import * as s from "./StatsBlock.module.css";

type StatCardProps = {
  number: string;
  statement: string;
};

const StatCard = ({ number, statement }: StatCardProps) => (
  <div className={s.statCard}>
    <div className={s.number}>{number}</div>
    <div className={s.statement}>{statement}</div>
  </div>
);

type StatsBlockProps = {
  title: string;
  statCards: StatCardProps[];
};

const StatsBlock = ({ title, statCards }: StatsBlockProps) => (
  <div className={s.bleedWrapper}>
    <div className={s.bleedBackground} />
    <div className={s.bleedMainContent}>
      <section className={s.gridParent}>
        <h1 className={s.title}>{title}</h1>
        <div className={s.gridAreaBottom}>
          {statCards.map(({ number, statement }) => (
            <StatCard key={statement} number={number} statement={statement} />
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default StatsBlock;

import * as React from "react";
import * as s from "./StatsBlock.module.css";

type StatsBlockProps = {
  statistic: string;
  statisticText: string;
};

const StatsBlock = ({ statistic, statisticText }: StatsBlockProps) => (
  <div className={s.wrapper}>
    <div className={s.statistic}>{statistic}</div>
    <p className={s.statisticText}>{statisticText}</p>
  </div>
);

export default StatsBlock;

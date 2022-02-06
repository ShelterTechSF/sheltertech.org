import * as React from "react";

type StatsBlockProps = {
  statistic: string;
  statisticText: string;
};

const StatsBlock = ({ statistic, statisticText }: StatsBlockProps) => (
  <div>
    <h1>{statistic}</h1>
    <p>{statisticText}</p>
  </div>
);

export default StatsBlock;

import * as React from "react";

type StatsBlockProps = {
  statistic: string;
  statistic_text: string;
};

const StatsBlock = ({statistic, statistic_text}: StatsBlockProps) => (
  <div>
    <h1>{statistic}</h1>
    <p>{statistic_text}</p>
  </div>
);

export default StatsBlock;

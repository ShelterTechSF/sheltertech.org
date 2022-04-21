import React from "react";
import StatsBlock from "./StatsBlock";

export default {
  title: "Blog/StatsBlock",
  component: StatsBlock,
};

const Template = ({ statistic, statisticText }) => (
  <div style={{ border: "1px dashed rebeccapurple" }}>
    <StatsBlock statistic={statistic} statisticText={statisticText} />
  </div>
);

export const DefaultStatsBlock = Template.bind({});
DefaultStatsBlock.args = {
  statistic: "9,000",
  statisticText:
    "At-risk community members can now access service and amenities",
};

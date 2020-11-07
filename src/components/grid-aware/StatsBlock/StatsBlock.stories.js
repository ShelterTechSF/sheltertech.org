import React from "react";
import StatsBlock from "./StatsBlock";

export default {
  title: "Grid-Aware/StatsBlock",
  component: StatsBlock,
};

const Template = ({ title, numberAndStatement }) => (
  <StatsBlock title={title} numberAndStatement={numberAndStatement} />
);

export const DefaultStatsBlock = Template.bind({});

DefaultStatsBlock.args = {
  title: "See what our volunteers have accomplished together.",
  numberAndStatement: [
    {
      number: "9,000",
      statement:
        "At-risk community members can now access services and amenities",
    },
    {
      number: "560",
      statement:
        "Bay Area volunteers have contributed to our cause since our founding in 2016",
    },
    {
      number: "$2M",
      statement:
        "Worth of work provided by volunteers has been put towards our programs",
    },
  ],
};

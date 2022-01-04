import React from "react";
import StatsBlock from "./StatsBlock";

export default {
  title: "Grid-Aware/StatsBlock",
  subTitle: "Optional Subtitle",
  component: StatsBlock,
};

const Template = ({ title, subtitle, statCards }) => (
  <StatsBlock title={title} subtitle={subtitle} statCards={statCards} />
);

export const DefaultStatsBlock = Template.bind({});

DefaultStatsBlock.args = {
  title: "See what our volunteers have accomplished together.",
  subtitle: "Optional subtitle.",
  statCards: [
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
  theme: "white",
};

import React from "react";
import StatsBlock from "./StatsBlock";

export default {
  title: "Grid-Aware/StatsBlock",
  subtitle: "Optional Subtitle",
  component: StatsBlock,
};

const Template = ({ title, subtitle, statCards }) => (
  <StatsBlock
    title={title}
    subtitle={subtitle}
    statCards={statCards}
    titleColor="blue"
  />
);

export const DefaultStatsBlock = Template.bind({});

DefaultStatsBlock.args = {
  title: "See what our volunteers have accomplished together.",
  subtitle: "Optional subtitle.",
  statCards: [
    {
      number: "9,000",
      secondaryNumber: "+5 YOY",
      statement:
        "At-risk community members can now access services and amenities",
    },
    {
      number: "560",
      secondaryNumber: "+5 YOY",
      statement:
        "Bay Area volunteers have contributed to our cause since our founding in 2016",
    },
    {
      number: "$2M",
      secondaryNumber: "+5 YOY",
      statement:
        "Worth of work provided by volunteers has been put towards our programs",
    },
  ],
  theme: "white",
  titleColor: "blue",
};

import React from "react";
import StatsBlock from "./StatsBlock";

export default {
  title: "Grid-Aware/StatsBlock",
  subtitle: "Optional Subtitle",
  component: StatsBlock,
};

const Template = ({ title, subtitle, barStatCards, theme, titleColor }) => (
  <StatsBlock
    title={title}
    subtitle={subtitle}
    barStatCards={barStatCards}
    theme={theme}
    titleColor={titleColor}
  />
);

export const DefaultStatsBlock = Template.bind({});

DefaultStatsBlock.args = {
  title: "ShelterConnect",
  subtitle: (
    <div>
      Delivering free, turn-key WiFi solutions to shelters and transitional
      housing facilities with key partners.{" "}
      <a
        href="https://www.sheltertech.org/programs"
        style={{ color: "var(--color-sheltertech-blue)" }}
      >
        Learn more about this program.
      </a>
    </div>
  ),
  barStatCards: [
    {
      axes: [
        { x: 2019, y: 14 },
        { x: 2020, y: 17 },
        { x: 2021, y: 21 },
      ],
      legend: {
        title: "Shelters Wired",
        subtitle: "+4 YOY",
      },
      position: "vertical",
    },
    {
      axes: [
        { x: "PEAK", y: 2398 },
        { x: "TARGET", y: 2428 },
        { x: 2020, y: 1412 },
      ],
      legend: {
        title: "People serviced daily",
        subtitle: "Daytime",
      },
      position: "horizontal",
    },
    {
      axes: [
        { x: "PEAK", y: 1761 },
        { x: "TARGET", y: 1132 },
        { x: 2020, y: 900 },
      ],
      legend: {
        title: "People serviced daily",
        subtitle: "Nighttime",
      },
      position: "horizontal",
    },
  ],
  theme: "gray",
  titleColor: "blue",
};

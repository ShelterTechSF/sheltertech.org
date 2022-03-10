import React from "react";
import StatsBarBlock from "./StatsBarBlock";

export default {
  title: "Grid-Aware/StatsBarBlock",
  subtitle: "Optional Subtitle",
  component: StatsBarBlock,
};

const Template = ({ title, subtitle, barStatCards, theme, titleColor }) => (
  <StatsBarBlock
    title={title}
    subtitle={subtitle}
    barStatCards={barStatCards}
    theme={theme}
    titleColor={titleColor}
  />
);

export const DefaultStatsBarBlock = Template.bind({});

DefaultStatsBarBlock.args = {
  title: "ShelterConnect",
  subtitle: (
    <>
      Delivering free, turn-key WiFi solutions to shelters and transitional
      housing facilities with key partners.{" "}
      <a
        href="https://www.sheltertech.org/programs"
        style={{ color: "var(--color-sheltertech-blue)" }}
      >
        Learn more about this program.
      </a>
    </>
  ),
  barStatCards: [
    {
      bars: [
        { label: 2019, statistic: 14 },
        { label: 2020, statistic: 17 },
        { label: 2021, statistic: 21 },
      ],
      title: "Shelters Wired",
      subtitle: "+4 YOY",
      orientation: "vertical",
    },
    {
      bars: [
        { label: "PEAK", statistic: 2398 },
        { label: "TARGET", statistic: 2428 },
        { label: 2020, statistic: 1412 },
      ],
      title: "People serviced daily",
      subtitle: "Daytime",
      orientation: "horizontal",
    },
    {
      bars: [
        { label: "PEAK", statistic: 1761 },
        { label: "TARGET", statistic: 1132 },
        { label: 2020, statistic: 900 },
      ],

      title: "People serviced daily",
      subtitle: "Nighttime",
      orientation: "horizontal",
    },
  ],
  theme: "gray",
  titleColor: "blue",
};

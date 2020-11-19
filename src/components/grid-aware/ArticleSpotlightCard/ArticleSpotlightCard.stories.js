import React from "react";

import ArticleSpotlightCard from "./ArticleSpotlightCard";
import background from "./stories/background.jpeg";

export default {
  title: "Grid-Aware/ArticleSpotlightCard",
  component: ArticleSpotlightCard,
};

const Template = ({
  eyebrowText,
  title,
  description,
  button,
  backgroundImage,
}) => (
  <ArticleSpotlightCard
    eyebrowText={eyebrowText}
    title={title}
    description={description}
    button={button}
    backgroundImage={backgroundImage}
  />
);

export const Default = Template.bind({});
Default.args = {
  eyebrowText: "ShelterConnect Spotlight",
  title: "Mission Hotel",
  description:
    "We recently reached a major milestone. The biggest SRO in San Francisco now provides free wifi and hardware to hundreds of people.",
  button: {
    text: "Read More",
    externalLink:
      "https://medium.com/shelter-tech/the-mission-hotel-san-franciscos-largest-sro-now-provides-free-internet-to-hundreds-of-at-risk-f72761c62c2e",
  },
  backgroundImage: background,
};

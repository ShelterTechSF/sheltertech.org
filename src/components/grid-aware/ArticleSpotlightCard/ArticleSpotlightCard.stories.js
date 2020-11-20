import React from "react";

import ArticleSpotlightCard from "./ArticleSpotlightCard";
import background from "./stories/background.png";

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
  eyebrowText: "Partnership Spotlight",
  title: "Digital Equity Team of San Francisco",
  description:
    "Free Fiber Initiative summary we're working together to find new and different ways of building lasting infrastructure.",
  text: "Read More",
  button: { text: "Read More", internalLink: "/foo" },
  backgroundImage: background,
};

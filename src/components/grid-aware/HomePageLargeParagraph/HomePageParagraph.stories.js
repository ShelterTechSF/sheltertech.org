import React from "react";

import HomePageParagraph from "./HomePageParagraph";

export default {
  title: "Grid-Aware/HomePageParagraph",
  component: HomePageParagraph,
};

const Template = ({ title, description }) => (
  <HomePageParagraph title={title} description={description} />
);

export const DefaultHomePageParagraph = Template.bind({});
DefaultHomePageParagraph.args = {
  title: "We believe digital equity is a human right.",
  description:
    "Access to the internet and technology makes it possible for people to find their next job, home, meal, and contact family and friends.",
};

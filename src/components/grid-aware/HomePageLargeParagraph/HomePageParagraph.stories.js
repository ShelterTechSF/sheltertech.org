import React from "react";

import HomePageParagraph from "./HomePageParagraph";

export default {
  title: "Grid-Aware/HomePageParagraph",
  component: HomePageParagraph,
};

const Template = ({ text }) => <HomePageParagraph text={text} />;

export const DefaultHomePageParagraph = Template.bind({});
DefaultHomePageParagraph.args = {
  text:
    "We believe digital equity is a human right. Access to the internet and technology makes it possible for people to find their next job, home, meal, and contact family and friends.",
};

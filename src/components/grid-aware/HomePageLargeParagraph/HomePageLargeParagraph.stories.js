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
  title: "We believe connectivity is a human right.",
  description:
    "Access to the internet and technology makes it possible for people to find a job, human services, and contact family and friends.",
};

import React from "react";

import HomePageLargeParagraph from "./HomePageLargeParagraph";

export default {
  title: "Grid-Aware/HomePageLargeParagraph",
  component: HomePageLargeParagraph,
};

const Template = ({ title, description }) => (
  <HomePageLargeParagraph title={title} description={description} />
);

export const DefaultHomePageLargeParagraph = Template.bind({});
DefaultHomePageLargeParagraph.args = {
  title: "We believe connectivity is a human right.",
  description:
    "Access to the internet and technology makes it possible for people to find a job, human services, and contact family and friends.",
};

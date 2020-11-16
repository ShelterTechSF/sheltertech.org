import React from "react";

import COVID19InfoBoxBlock from "./COVID19InfoBoxBlock";

export default {
  title: "Grid-Aware/COVID19InfoBoxBlock",
  component: COVID19InfoBoxBlock,
};

const Template = ({ title, description }) => (
  <COVID19InfoBoxBlock title={title} description={description} />
);

export const DefaultCOVID19InfoBoxBlock = Template.bind({});
DefaultCOVID19InfoBoxBlock.args = {
  title: "Volunteering during COVID-19",
  description:
    "Our programs have shifted to remote alternatives. While our means of coming together are different, our research and Datathon events will be conducted online. Simply put, our goal is still the same: to connect this community with resources that can help them address their challenges, become permanently housed, and on track to live happy and productive lives.",
};

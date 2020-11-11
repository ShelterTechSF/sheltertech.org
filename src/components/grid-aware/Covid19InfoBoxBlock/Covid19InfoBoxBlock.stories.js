import React from "react";

import Covid19InfoBoxBlock from "./Covid19InfoBoxBlock";

export default {
  title: "Grid-Aware/Covid19InfoBoxBlock",
  component: Covid19InfoBoxBlock,
};

const Template = ({ title, description }) => (
  <Covid19InfoBoxBlock title={title} description={description} />
);

export const DefaultCovid19InfoBoxBlock = Template.bind({});
DefaultCovid19InfoBoxBlock.args = {
  title: "Volunteering during COVID-19",
  description:
    "Our programs have shifted to remote alternatives. While our means of coming together are different, our research and Datathon events will be conducted online. Simply put, our goal is still the same: to connect this community with resources that can help them address their challenges, become permanently housed, and on track to live happy and productive lives.",
};

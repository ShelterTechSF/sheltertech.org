import React from "react";

import TitleBlock from "./TitleBlock";

export default {
  title: "Grid-Aware/TitleBlock",
  component: TitleBlock,
};

const Template = ({ title }) => <TitleBlock title={title} />;

export const DefaultTitleBlock = Template.bind({});
DefaultTitleBlock.args = {
  title: "Voices from the community",
};

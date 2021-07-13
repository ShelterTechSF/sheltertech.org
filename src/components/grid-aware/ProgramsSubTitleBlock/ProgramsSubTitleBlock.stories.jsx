import React from "react";

import ProgramsSubTitleBlock from "./ProgramsSubTitleBlock";

export default {
  title: "Grid-Aware/ProgramsSubTitleBlock",
  component: ProgramsSubTitleBlock,
};

const Template = ({ title }) => (
  <div>
    <ProgramsSubTitleBlock title={title} />
  </div>
);

export const DefaultProgramsSubTitleBlock = Template.bind({});
DefaultProgramsSubTitleBlock.args = {
  title: "ShelterTech offers the following programs:",
};

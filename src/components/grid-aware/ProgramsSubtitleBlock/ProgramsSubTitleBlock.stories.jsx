import React from "react";

import ProgramsSubtitleBlock from "./ProgramsSubtitleBlock";

export default {
  title: "Grid-Aware/ProgramsSubtitleBlock",
  component: ProgramsSubtitleBlock,
};

const Template = ({ title }) => (
  <div>
    <ProgramsSubtitleBlock title={title} />
  </div>
);

export const DefaultProgramsSubtitleBlock = Template.bind({});
DefaultProgramsSubtitleBlock.args = {
  title: "ShelterTech offers the following programs:",
};

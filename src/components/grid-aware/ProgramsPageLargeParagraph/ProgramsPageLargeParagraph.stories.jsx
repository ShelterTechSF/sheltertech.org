import React from "react";

import ProgramsPageLargeParagraph from "./ProgramsPageLargeParagraph";

export default {
  title: "Grid-Aware/ProgramsPageLargeParagraph",
  component: ProgramsPageLargeParagraph,
};

const Template = ({ title, description }) => (
  <ProgramsPageLargeParagraph title={title} description={description} />
);

export const DefaultProgramsPageLargeParagraph = Template.bind({});
DefaultProgramsPageLargeParagraph.args = {
  title: "We believe connectivity is a human right.",
  description:
    "Access to the internet and technology makes it possible for people to find a job, human services, and contact family and friends.",
};

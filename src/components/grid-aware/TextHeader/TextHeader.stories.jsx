import React from "react";

import TextHeader from "./TextHeader";

export default {
  title: "Grid-Aware/TextHeader",
  component: TextHeader,
};

const Template = ({ title, description }) => (
  <TextHeader title={title} description={description} />
);

export const DefaultTextHeader = Template.bind({});
DefaultTextHeader.args = {
  title: "Our Programs",
  description:
    "ShelterTech's programs are designed to support the underserved community experiencing homelessness and housing insecurity through WiFi connectivity and access to online resources.",
};

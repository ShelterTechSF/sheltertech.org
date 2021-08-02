import React from "react";

import ProgramBlock from "./ProgramBlock";
import serviceGuideImg from "./stories/sf-service-guide.jpg";

export default {
  title: "Grid-Aware/ProgramBlock",
  component: ProgramBlock,
};

const Template = ({ title, subtitle, description, image, ctaButtons }) => (
  <ProgramBlock
    title={title}
    subtitle={subtitle}
    description={description}
    image={image}
    ctaButtons={ctaButtons}
  />
);

export const DefaultProgramBlock = Template.bind({});
DefaultProgramBlock.args = {
  title: "SF Service Guide",
  subtitle: "an online directory of human services in San Francisco",
  description:
    "The SF Service Guide is an online directory of human services in San Francisco that launched in November 2019 and currently serves 1,500 unique monthly users. The directory's focus is on homelessness and housing services but also covers a variety of other services, from education and legal aid to senior services and re-entry programs. Our goal is to help anyone with access to smartphone, tablet, or computer to find services they need.",
  image: {
    url: serviceGuideImg,
    alt: "SF Service Guide",
  },
  ctaButtons: [
    {
      text: "Visit Site",
      internalLink: "/foo",
    },
    {
      text: "Donate",
      internalLink: "/foo",
    },
  ],
};

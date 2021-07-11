import React from "react";

import SFServiceGuideBlock from "./SFServiceGuideBlock";

import classroom from "./stories/classroom.png";
import whiteboard from "./stories/whiteboard-sticky-notes.png";

export default {
  title: "Grid-Aware/SFServiceGuideBlock",
  component: SFServiceGuideBlock,
};

const Template = ({
  title,
  subtitle,
  description,
  description2,
  image,
  ctaButtons,
}) => (
  <SFServiceGuideBlock
    title={title}
    subtitle={subtitle}
    description={description}
    description2={description2}
    image={image}
    ctaButtons={ctaButtons}
  />
);

export const DefaultSFServiceGuideBlock = Template.bind({});
DefaultSFServiceGuideBlock.args = {
  title: "SF Service Guide",
  subtitle: "an online directory of human services in San Francisco",
  description:
    "The SF Service Guide is an online directory of human services in San Francisco that launched in November 2019 and currently serves 1,500 unique monthly users. The directory's focus is on homelessness and housing services but also covers a variety of other services, from education and legal aid to senior services and re-entry programs. Our goal is to help anyone with access to smartphone, tablet, or computer to find services they need.",
  description2:
    "SF Service Guide is supported by a grant from SF Mayor's Office of Housing and Community Development and verified for accuracy by our data partner, the Homeless Advocacy Project of the JDC.",
  image: {
    url: classroom,
    alt: "Classroom of volunteer members collaborating with one another.",
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

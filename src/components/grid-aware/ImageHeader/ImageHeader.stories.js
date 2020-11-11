import React from "react";

import ImageHeader from "./ImageHeader";

import classroom from "./stories/classroom.png";
import whiteboard from "./stories/whiteboard-sticky-notes.png";

export default {
  title: "Grid-Aware/ImageHeader",
  component: ImageHeader,
};

const Template = ({
  title,
  subtitle,
  description,
  image1,
  image2,
  ctaButtons,
}) => (
  <ImageHeader
    title={title}
    subtitle={subtitle}
    description={description}
    image1={image1}
    image2={image2}
    ctaButtons={ctaButtons}
  />
);

export const DefaultImageHeader = Template.bind({});
DefaultImageHeader.args = {
  title: "Volunteering",
  subtitle:
    "We rely on hundreds of volunteers to bridge the digital divide that our most vulnerable neighbors face.",
  description:
    "If you share our belief that digital equity is a human right, we encourage you to apply and work with us.",
  image1: {
    url: classroom,
    alt: "Classroom of volunteer members collaborating with one another.",
  },
  image2: {
    url: whiteboard,
    alt:
      "Team members collaborating together by looking and pointing at whiteboard covered with sticky notes full of ideas.",
  },
  ctaButtons: [
    {
      text: "APPLY",
      internalLink: "/foo",
    },
  ],
};

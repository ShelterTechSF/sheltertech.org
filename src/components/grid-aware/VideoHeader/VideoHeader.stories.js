import React from "react";

import VideoHeader from "./VideoHeader";
import videoHeaderImage from "./stories/VideoHeader.png";

export default {
  title: "Grid-Aware/VideoHeader",
  component: VideoHeader,
};

const Template = ({ title, description, ctaButtons, playButtonLink }) => (
  <VideoHeader
    title={title}
    description={description}
    image={videoHeaderImage}
    ctaButtons={ctaButtons}
    playButtonLink={playButtonLink}
  />
);

export const DefaultVideoHeader = Template.bind({});
DefaultVideoHeader.args = {
  title:
    "Less than half of nearly 10,000 people experiencing homelessness in the Bay Area have reliable access to the internet.",
  description:
    "ShelterTech is a technology-focused nonprofit organization making it easier for this community to connect with resources that can help them address their challenges.",
  ctaButtons: [
    { text: "Donate", internalLink: "/new/donate" },
    { text: "Volunteer", internalLink: "/new/volunteer" },
  ],
  playButtonLink: "https://www.youtube.com/watch?v=2aLyGwaRufY&t=2s",
};

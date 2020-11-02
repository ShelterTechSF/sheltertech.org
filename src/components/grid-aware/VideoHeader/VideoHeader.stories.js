import React from "react";

import VideoHeader from "./VideoHeader";
import videoHeaderImage from "./stories/VideoHeader.png";

export default {
  title: "Grid-Aware/VideoHeader",
  component: VideoHeader,
};

const Template = ({ title, description, ctaButtons, playButtonLink }) => (
  <VideoHeader
    text={{
      title,
      description,
    }}
    image={videoHeaderImage}
    ctaButtons={ctaButtons}
    playButtonLink={playButtonLink}
  />
);

export const DefaultVideoHeader = Template.bind({});
DefaultVideoHeader.args = {
  title:
    "X in 10 people experiencing homelessness lack access to the internet and essential digital services",
  description:
    "ShelterTech is a nonprofit organization dedicated to supporting people who are experiencing homelessness or housing insecurity by leveraging technology and connectivity.",
  ctaButtons: [
    { text: "Donate", internalLink: "/foo" },
    { text: "Volunteer", internalLink: "/bar" },
  ],
  playButtonLink: "https://www.youtube.com/watch?v=KCduRWJ1hQo", // SF Service Guide Beta Launch Webinar
};

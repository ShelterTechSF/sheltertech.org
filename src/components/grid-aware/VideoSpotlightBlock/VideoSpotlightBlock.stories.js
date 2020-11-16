import React from "react";

import VideoSpotlightBlock from "./VideoSpotlightBlock";
import videoSpotlightBlockImage from "./stories/VideoSpotlightBlock.png";

export default {
  title: "Grid-Aware/VideoSpotlightBlock",
  component: VideoSpotlightBlock,
};

const Template = ({
  eyebrowText,
  description,
  button,
  image,
  playButtonLink,
}) => (
  <VideoSpotlightBlock
    eyebrowText={eyebrowText}
    description={description}
    button={button}
    image={image}
    playButtonLink={playButtonLink}
  />
);

export const VideoSpotlightBlockDefault = Template.bind({});
VideoSpotlightBlockDefault.args = {
  eyebrowText: "Our Impact",
  description:
    "Over 3,000 people have daily internet access in local shelters and resource centers.",
  button: { text: "View Annual Report", internalLink: "/foo" },
  image: {
    url: videoSpotlightBlockImage,
    alt: "Video spotlight of Aaron speaking.",
  },
  playButtonLink: "/foo",
};

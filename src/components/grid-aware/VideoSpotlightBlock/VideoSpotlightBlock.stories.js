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
  imageURL,
  playButtonLink,
  blackBackground,
}) => (
  <VideoSpotlightBlock
    eyebrowText={eyebrowText}
    description={description}
    button={button}
    imageURL={imageURL}
    playButtonLink={playButtonLink}
    blackBackground={blackBackground}
  />
);

export const VideoSpotlightBlockDefault = Template.bind({});
VideoSpotlightBlockDefault.args = {
  eyebrowText: "Our Impact",
  description:
    "Over 3,000 people have daily internet access in local shelters and resource centers.",
  button: { text: "View Annual Report", internalLink: "/foo" },
  imageURL: videoSpotlightBlockImage,
  playButtonLink: "/foo",
};

export const VideoSpotlightBlockBlackBackground = Template.bind({});
VideoSpotlightBlockBlackBackground.args = {
  eyebrowText: "Our Impact",
  description:
    "Over 3,000 people have daily internet access in local shelters and resource centers.",
  button: { text: "View Annual Report", internalLink: "/foo" },
  imageURL: videoSpotlightBlockImage,
  playButtonLink: "/foo",
  blackBackground: true,
};

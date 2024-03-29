import React from "react";
import ImageBlock from "./ImageBlock";
import sampleImage from "./stories/sampleImage.png";

export default {
  title: "Blog/ImageBlock",
  component: ImageBlock,
};

const Template = ({ caption, url }) => (
  <div style={{ border: "1px dashed rebeccapurple" }}>
    <ImageBlock caption={caption} url={url} />
  </div>
);

export const DefaultImageBlock = Template.bind({});
DefaultImageBlock.args = {
  caption: "This is a text caption.",
  url: sampleImage,
  isFullWidth: false,
};

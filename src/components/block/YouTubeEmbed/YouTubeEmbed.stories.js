import React from "react";
import YouTubeEmbed from "./YouTubeEmbed";

export default {
  title: "Block/YouTubeEmbed",
  component: YouTubeEmbed,
};

const Template = ({ url, title }) => (
  <div style={{ maxWidth: "800px" }}>
    <YouTubeEmbed url={url} title={title} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  url: "https://www.youtube.com/embed/2aLyGwaRufY",
  title: "My Video",
};

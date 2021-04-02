import * as React from "react";

import s from "./YouTubeEmbed.module.css";

type YouTubeEmbedProps = {
  url: string;
  title: string;
};

const YouTubeEmbed = ({ url, title }: YouTubeEmbedProps) => (
  <div className={s.wrapper}>
    <iframe
      className={s.iframe}
      title={title}
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

export default YouTubeEmbed;

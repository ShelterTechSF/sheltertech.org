import PropTypes from "prop-types";
import React from "react";

import s from "./YouTubeEmbed.module.css";

const YouTubeEmbed = ({ url, title }) => (
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

YouTubeEmbed.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default YouTubeEmbed;

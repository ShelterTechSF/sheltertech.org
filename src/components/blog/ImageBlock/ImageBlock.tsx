import * as React from "react";

type ImageBlockProps = {
  caption: string;
  url: string;
  /* eslint-disable react/no-unused-prop-types */
  isFullWidth?: boolean;
};

const ImageBlock = ({ url, caption }: ImageBlockProps) => (
  <div>
    <img src={url} alt={caption} />
    <p>{caption}</p>
  </div>
);

export default ImageBlock;

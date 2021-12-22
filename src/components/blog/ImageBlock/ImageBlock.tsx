import * as React from "react";

type ImageBlockProps = {
  caption: string;
  url: string;
  fullWidth?: boolean;
};

const ImageBlock = ({
  url,
  caption,
  fullWidth,
}: ImageBlockProps) => (
  <div>
    <img src={url} alt={caption} />
    <p>{caption}</p>
  </div>
);

export default ImageBlock;

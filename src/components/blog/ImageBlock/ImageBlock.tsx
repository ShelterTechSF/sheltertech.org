import * as React from "react";
import * as s from "./ImageBlock.module.css";

type ImageBlockProps = {
  caption: string;
  url: string;
  /* eslint-disable-next-line react/no-unused-prop-types */
  isFullWidth?: boolean;
};

const ImageBlock = ({ url, caption }: ImageBlockProps) => (
  <div>
    <img className={s.image} src={url} alt={caption} />
    <p className={s.caption}>{caption}</p>
  </div>
);

export default ImageBlock;

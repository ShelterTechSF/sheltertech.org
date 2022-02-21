import * as React from "react";
import * as s from "./ImageBlock.module.css";

type ImageBlockProps = {
  caption: string;
  url: string;
};

const ImageBlock = ({ url, caption }: ImageBlockProps) => (
  <div className={s.container}>
    <img className={s.image} src={url} alt={caption} />
    <div className={s.caption}>{caption}</div>
  </div>
);

export default ImageBlock;

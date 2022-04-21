import { RichText, RichTextBlock } from "prismic-reactjs";
import * as React from "react";
import * as s from "./TextBlock.module.css";

type TextBlockProps = {
  rawText: RichTextBlock[];
};

const TextBlock = ({ rawText }: TextBlockProps) => (
  <div className={`${s.wrapper} ${s.richText}`}>
    <RichText render={rawText} />
  </div>
);

export default TextBlock;

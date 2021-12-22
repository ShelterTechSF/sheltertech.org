import { RichText, RichTextBlock } from "prismic-reactjs";
import * as React from "react";

type ButtonBlockProps = {
  rawText: RichTextBlock[];
};

const TextBlock = ({ rawText }: ButtonBlockProps) => (
  <RichText render={rawText} />
);

export default TextBlock;

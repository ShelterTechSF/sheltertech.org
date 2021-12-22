import * as React from "react";
import {RichText, RichTextBlock} from 'prismic-reactjs';

type ButtonBlockProps = {
  rawText: RichTextBlock[];
};

const TextBlock = ({
  rawText,
}: ButtonBlockProps) => (
  <RichText
    render={rawText}
  />
);

export default TextBlock;

import * as React from "react";
import * as s from "./QuoteBlock.module.css";

type QuoteBlockProps = {
  quote: string;
  attributee?: string;
};

const QuoteBlock = ({ quote, attributee }: QuoteBlockProps) => {
  const quoteContent = attributee ? `${quote} - ${attributee}` : quote;
  return <p className={s.quote}>{quoteContent}</p>;
};

export default QuoteBlock;

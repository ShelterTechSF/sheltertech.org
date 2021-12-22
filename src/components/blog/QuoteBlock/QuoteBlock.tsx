import * as React from "react";

type QuoteBlockProps = {
  quote: string;
  attributee?: string;
};

const QuoteBlock = ({ quote, attributee }: QuoteBlockProps) => {
  const quoteContent = attributee ? `${quote} - ${attributee}` : quote;
  return <p>{quoteContent}</p>;
};

export default QuoteBlock;

import * as React from "react";
import * as s from "./QuoteBlock.module.css";

type QuoteBlockProps = {
  quote: string;
  attributee?: string;
};

const QuoteBlock = ({ quote, attributee }: QuoteBlockProps) => {
  return (
    <div className={s.quote}>
      <q className={s.quoteText}>{quote}</q>
      <span className={s.quoteText}>{` - ${attributee}`}</span>
    </div>
  );
};

export default QuoteBlock;

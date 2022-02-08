import React from "react";
import QuoteBlock from "./QuoteBlock";

export default {
  title: "Blog/QuoteBlock",
  component: QuoteBlock,
};

const Template = ({ quote, attributee }) => (
  <div style={{ border: "1px dashed rebeccapurple" }}>
    <QuoteBlock quote={quote} attributee={attributee} />
  </div>
);

export const DefaultQuoteBlock = Template.bind({});
DefaultQuoteBlock.args = {
  quote: "This is a quote.",
  attributee: "Anonymous",
};

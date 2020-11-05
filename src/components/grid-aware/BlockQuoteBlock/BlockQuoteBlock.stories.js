import React from "react";
import BlockQuoteBlock from "./BlockQuoteBlock";

export default {
  title: "Grid-Aware/BlockQuoteBlock",
  component: BlockQuoteBlock,
};

const Template = ({ quotes }) => (
    <BlockQuoteBlock quotes={ quotes }/>
);

export const DefaultBlockQuoteBlock = Template.bind({});

DefaultBlockQuoteBlock.args = {
  quotes:[
    {quote:
        "We've heard from San Franciscans, including as part of our recent strategic planning community outreach that it's hard to know where to go when you're looking for supportive services. It's hard to know where to start, and hard to navigate different resources to find accurate information. We're glad to be supporting ShelterTech and the broader community to build SF Service Guide - a one-stop, reliable place to help connect residents to the services they need.",
      attribution:
        "Barry Roeder, Mayor's Office of Housing and Community Development"},
    { quote: "ShelterTech, Welcomes You!", attribution: "Richard Xia" },
    { quote: "Please Donate!", attribution: "David Agustin" },
    { quote: "Happy Holidays", attribution: "Candy Wang" },
  ]
};
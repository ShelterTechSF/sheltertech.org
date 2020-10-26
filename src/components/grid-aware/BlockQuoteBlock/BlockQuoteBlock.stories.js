import React from "react";
import BlockQuoteBlock from "./BlockQuoteBlock";
import Carousel from 'nuka-carousel';


export default {
  title: "Grid-Aware/BlockQuoteBlock",
  component: BlockQuoteBlock,
};


const Template = ({ quote, author }) => (
  <Carousel renderCenterLeftControls={false} renderCenterRightControls={false}>
    <BlockQuoteBlock quote={quote} author={author} /> 
    <BlockQuoteBlock quote={quote} author={author} /> 
    <BlockQuoteBlock quote={quote} author={author} /> 
    <BlockQuoteBlock quote={quote} author={author} /> 
    <BlockQuoteBlock quote={quote} author={author} /> 
  </Carousel>


);

export const DefaultBlockQuoteBlock = Template.bind({});

DefaultBlockQuoteBlock.args = {
  quote: `"We've heard from San Franciscans, including as part of our recent strategic planning community outreach that it's hard to know where to go when you're looking for supportive services. It's hard to know where to start, and hard to navigate different resources to find accurate information. We're glad to be supporting ShelterTech and the broader community to build SF Service Guide - a one-stop, reliable place to help connect residents to the services they need"`,
  author: "—Barry Roeder, Mayor's Office of Housing and Community Development",
};

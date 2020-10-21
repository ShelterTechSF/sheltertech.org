import React from "react";
import Slider from "react-slick";
import BlockQuoteBlock from "./BlockQuoteBlock";
/* eslint-disable react/jsx-props-no-spreading */

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default {
  title: "Grid-Aware/BlockQuoteBlock",
  component: BlockQuoteBlock,
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Template = ({ quote, author }) => (
  <Slider {...settings}>
    <BlockQuoteBlock quote={quote} author={author} />
    <BlockQuoteBlock quote={quote} author={author} />
    <BlockQuoteBlock quote={quote} author={author} />
    <BlockQuoteBlock quote={quote} author={author} />
    <BlockQuoteBlock quote={quote} author={author} />
  </Slider>
);

export const DefaultBlockQuoteBlock = Template.bind({});

DefaultBlockQuoteBlock.args = {
  quote: `"We've heard from San Franciscans, including as part of our recent strategic planning community outreach that it's hard to know where to go when you're looking for supportive services. It's hard to know where to start, and hard to navigate different resources to find accurate information. We're glad to be supporting ShelterTech and the broader community to build SF Service Guide - a one-stop, reliable place to help connect residents to the services they need"`,
  author: "—Barry Roeder, Mayor's Office of Housing and Community Development",
};

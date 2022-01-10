import React from "react";

import BlogPostSummaryCard from "./BlogPostSummaryCard";
import storyImage from "./stories/background.png";

export default {
  title: "Blog/BlogPostSummaryCard",
  component: BlogPostSummaryCard,
};

const Template = ({ url, title, topic, body, date, author, image }) => (
  <div style={{ border: "1px dashed rebeccapurple" }}>
    <BlogPostSummaryCard
      url={url}
      title={title}
      topic={topic}
      body={body}
      date={date}
      author={author}
      image={image}
    />
  </div>
);

export const DefaultBlogPostSummaryCard = Template.bind({});
DefaultBlogPostSummaryCard.args = {
  url: "/blog/my-cool-post",
  title:
    "The Mission Hotel, San Francisco’s Largest SRO, Now Provides Free Internet to Hundreds of At-Risk Residents",
  topic: "ShelterConnect",
  body: "We recently accomplished a major milestone that will help us to accomplish our goal of providing all Bay Area shelters with WiFi access by 2024. On October 5, 2020, we completed installation of a WiFi network at the Mission Hotel — San Francisco’s largest Single-Room Occupancy (SRO) Hotel. Through incremental funding and partnerships, hundreds of at-risk residents now have free internet access, making it possible to easily communicate with friends and family, utilize crucial resources, and develop technological and vocational skills.",
  date: "October 27, 2021",
  author: "Author Name",
  image: {
    url: storyImage,
    alt: "The Mission Hotel",
  },
};

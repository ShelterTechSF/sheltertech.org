import React from "react";
import TextBlock from "./TextBlock";

export default {
  title: "Blog/TextBlock",
  component: TextBlock,
};

const Template = ({ rawText }) => (
  <div style={{ border: "1px dashed rebeccapurple" }}>
    <TextBlock rawText={rawText} />
  </div>
);

export const DefaultTextBlock = Template.bind({});
DefaultTextBlock.args = {
  rawText: [
    {
      type: "paragraph",
      text: "We recently accomplished a major milestone that will help us to accomplish our goal of providing all Bay Area shelters with WiFi access by 2024. On October 5, 2020, we completed installation of a WiFi network at the Mission Hotel — San Francisco’s largest Single-Room Occupancy (SRO) Hotel. Through incremental funding and partnerships, hundreds of at-risk residents now have free internet access, making it possible to easily communicate with friends and family, utilize crucial resources, and develop technological and vocational skills.",
      spans: [
        {
          start: 216,
          end: 229,
          type: "hyperlink",
          data: {
            link_type: "Web",
            url: "https://www.sheltertech.org/",
            target: "_blank",
          },
        },
      ],
    },
    {
      type: "list-item",
      text: "Performant (Doesn’t include images)",
      spans: [],
    },
    {
      type: "list-item",
      text: "Resizable",
      spans: [],
    },
    {
      type: "list-item",
      text: "Accessible",
      spans: [],
    },
    {
      type: "list-item",
      text: "Partial star (e.g: 3.5 or 3.2) dynamically",
      spans: [],
    },
    {
      type: "list-item",
      text: "Easy to maintain with CSS",
      spans: [],
    },
  ],
};

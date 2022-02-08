import React from "react";
import TitleBlock from "./TitleBlock";

export default {
  title: "Blog/TitleBlock",
  component: TitleBlock,
};

const Template = ({ topic, title, dateAuthorString }) => (
  <div style={{ border: "1px dashed rebeccapurple" }}>
    <TitleBlock
      topic={topic}
      title={title}
      dateAuthorString={dateAuthorString}
    />
  </div>
);

export const DefaultTitleBlock = Template.bind({});
DefaultTitleBlock.args = {
  topic: "ShelterConnect Spotlight",
  title:
    "The Mission Hotel, San Francisco's Largest SRO, Now Provides Free Internet to Hundreds of At-Risk Residents",
  dateAuthorString: "August 5, 2021 - Author Name",
};

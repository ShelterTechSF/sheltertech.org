import React from "react";

import TopicFilterMenu from "./TopicFilterMenu";

export default {
  title: "Blog/TopicFilterMenu",
  component: TopicFilterMenu,
};

const Template = ({ topics, activeTopic }) => (
  <div style={{ border: "1px dashed rebeccapurple" }}>
    <TopicFilterMenu topics={topics} activeTopic={activeTopic} />
  </div>
);

export const DefaultTopicFilterMenu = Template.bind({});
DefaultTopicFilterMenu.args = {
  topics: [
    { name: "ShelterConnect", uid: "shelterconnect" },
    { name: "SF Service Guide", uid: "sfserviceguide" },
    { name: "Volunteer Spotlights", uid: "volunter-spotlights" },
    { name: "Community Stories", uid: "community-stories" },
  ],
  activeTopic: null,
};

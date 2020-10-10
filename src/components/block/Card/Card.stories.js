import React from "react";
import Card from "./Card";
import img from "./sample.jpg";

export default {
  title: "Inline/Card",
  component: Card,
};

const Template = () => (
  <div style={{ backgroundColor: "black", width: "370px" }}>
    <Card
      photo={img}
      title="ShelterConnect"
      description="Every year, our ShelterConnect program provides 3XXX homeless and housing insecure people with free and unlimited internet access and we plan to provide every homeless individual with the digital infrastructure that meets their needs by 2024."
    />
  </div>
);

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  cardData: {
    photo: img,
    title: "ShelterConnect",
    description:
      "Every year, our ShelterConnect program provides 3XXX homeless and housing insecure people with free and unlimited internet access and we plan to provide every homeless individual with the digital infrastructure that meets their needs by 2024.",
  },
};

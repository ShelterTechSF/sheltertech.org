import React from "react";
import Spacer from "./Spacer";

export default {
  title: "Grid-Aware/Spacer",
  component: Spacer,
};

const Template = ({ heightDesktop, heightMobile, color }) => (
  <Spacer
    heightDesktop={heightDesktop}
    heightMobile={heightMobile}
    color={color}
  />
);

export const DefaultSpacer = Template.bind({});

DefaultSpacer.args = {
  heightDesktop: "70px",
  heightMobile: "40px",
  color: "#000",
};

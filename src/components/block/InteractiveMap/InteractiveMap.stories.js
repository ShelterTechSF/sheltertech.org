import React from "react";
import InteractiveMap from "./InteractiveMap";

export default {
  title: "Block/InteractiveMap",
  component: InteractiveMap,
};

const Template = ({ center, zoom }) => (
  <div style={{ height: "475px", width: "100%" }}>
    <InteractiveMap center={center} zoom={zoom} />
  </div>
);

export const DefaultInteractiveMap = Template.bind({});

DefaultInteractiveMap.args = {
  center: {
    lat: 37.78,
    lng: -122.44,
  },
  zoom: 12.9,
};

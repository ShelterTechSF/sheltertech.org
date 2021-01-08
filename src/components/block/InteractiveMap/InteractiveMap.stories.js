import React from "react";
import InteractiveMap from "./InteractiveMap";

export default {
  title: "Block/InteractiveMap",
  component: InteractiveMap,
};

const Template = ({ center, zoom, title, subtitle }) => (
  <div style={{ height: "475px", width: "100%" }}>
    <InteractiveMap
      center={center}
      zoom={zoom}
      title={title}
      subtitle={subtitle}
    />
  </div>
);

export const DefaultInteractiveMap = Template.bind({});

DefaultInteractiveMap.args = {
  center: {
    lat: 37.78,
    lng: -122.44,
  },
  zoom: 12.9,
  title: "ShelterConnect Installations",
  subtitle: "Interactive Map",
};

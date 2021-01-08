import React from "react";
import InteractiveMap from "./InteractiveMap";

export default {
  title: "Block/InteractiveMap",
  component: InteractiveMap,
};

const Template = ({ center, zoom, title, subtitle, latLngBounds }) => (
  <div style={{ height: "600px", width: "100%" }}>
    <InteractiveMap
      center={center}
      zoom={zoom}
      title={title}
      subtitle={subtitle}
      latLngBounds={latLngBounds}
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
  latLngBounds: {
    north: 37.82,
    south: 37.7,
    west: -122.53,
    east: -122.37,
  },
};

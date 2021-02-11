import React from "react";
import InteractiveMap from "./InteractiveMap";
import CurrentInstallationMarker from "./currentInstallationMarker.svg";
import PlannedInstallationMarker from "./plannedInstallationMarker.svg";

// ----------------------------- //
//          Dummy Data
// ----------------------------- //

const dummyMarkerTypes = [
  {
    name: "Current Installation",
    imgPath: CurrentInstallationMarker,
  },
  {
    name: "Planned Installation",
    imgPath: PlannedInstallationMarker,
  },
];

// ----------------------------- //
//          Component
// ----------------------------- //

export default {
  title: "Block/InteractiveMap",
  component: InteractiveMap,
};

const Template = ({
  center,
  zoom,
  title,
  subtitle,
  latLngBounds,
  markerTypes,
}) => (
  <InteractiveMap
    center={center}
    zoom={zoom}
    title={title}
    subtitle={subtitle}
    latLngBounds={latLngBounds}
    markerTypes={markerTypes}
  />
);

export const DefaultInteractiveMap = Template.bind({});

// ----------------------------- //
//          Props
// ----------------------------- //

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
  markerTypes: dummyMarkerTypes,
};

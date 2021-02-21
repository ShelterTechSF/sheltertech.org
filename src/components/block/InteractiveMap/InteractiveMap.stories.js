import React from "react";
import InteractiveMap from "./InteractiveMap";
import LiveInstallationMarker from "./liveInstallationMarker.svg";
import UpcomingInstallationMarker from "./upcomingInstallationMarker.svg";

// ----------------------------- //
//          Dummy Data
// ----------------------------- //

const dummyMarkerTypes = [
  {
    name: "Live Installations",
    imgPath: LiveInstallationMarker,
  },
  {
    name: "Upcoming Installations",
    imgPath: UpcomingInstallationMarker,
  },
];

const dummyLocations = [
  {
    lat: 37.78697750331876,
    lng: -122.40519564996274,
    name: "Museum of Ice Cream",
    subtitle: "320 people",
    fundingUrl: "/",
    markerType: "Live Installations",
  },
  {
    lat: 37.77125701814453,
    lng: -122.446282346944,
    name: "Ben & Jerry's",
    subtitle: "120 people",
    fundingUrl: "/",
    markerType: "Live Installations",
  },
  {
    lat: 37.78061869726422,
    lng: -122.47771010943731,
    name: "Joe's Ice Cream",
    subtitle: "4563 people",
    fundingUrl: "/",
    markerType: "Upcoming Installations",
  },
  {
    lat: 37.78923780888709,
    lng: -122.43414513279457,
    name: "Smitten Ice Cream",
    subtitle: ">10,000 people",
    fundingUrl: "/",
    markerType: "Upcoming Installations",
  },
  {
    lat: 37.758684521153505,
    lng: -122.42044428675193,
    name: "Garden Creamery",
    subtitle: "16 people",
    fundingUrl: "/",
    markerType: "Upcoming Installations",
  },
];

// ----------------------------- //
//          Component
// ----------------------------- //

export default {
  title: "Block/InteractiveMap",
  component: InteractiveMap,
  parameters: {
    storyshots: { disable: true },
    /* Jest is DISABLED for this story, because it cannot make sense
    of Google Maps and will always fail, unless we provide our own
    mock implementation of Google Maps */
  },
};

const Template = ({
  center,
  zoom,
  title,
  subtitle,
  latLngBounds,
  markerTypes,
  locations,
}) => (
  <InteractiveMap
    center={center}
    zoom={zoom}
    title={title}
    subtitle={subtitle}
    latLngBounds={latLngBounds}
    markerTypes={markerTypes}
    locations={locations}
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
  latLngBounds: {
    north: 37.82,
    south: 37.7,
    west: -122.53,
    east: -122.37,
  },
  markerTypes: dummyMarkerTypes,
  locations: dummyLocations,
};

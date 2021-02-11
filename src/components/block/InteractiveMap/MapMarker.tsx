import * as React from "react";

import type { MapLocation, MarkerType } from "./InteractiveMap";

import s from "./MapMarker.module.css";

// ----------------------------- //
//          Helpers
// ---------------------------- //

const getMarkerImagePath = (
  location: MapLocation,
  markerTypes: MarkerType[]
) => {
  const matchingTypes = markerTypes.filter(
    (markerType: MarkerType) => markerType.name === location.markerType
  );
  if (matchingTypes.length > 0) {
    return matchingTypes[0].imgPath;
  }
  // If no valid image path is found for this location's markerType, throw an error
  const markerTypesList = markerTypes
    .map((markerType) => markerType.name)
    .join(", ");
  throw new Error(`
    No matching MarkerType found for location "${location.name}", which was given the markerType "${location.markerType}".\n
    Valid MarkerType values are: ${markerTypesList}.
  `);
};

// ----------------------------- //
//          Main Component
// ---------------------------- //

type MapMarkerProps = {
  lat: number;
  lng: number;
  location: MapLocation;
  markerTypes: MarkerType[];
};

const MapMarker = ({ location, markerTypes }: MapMarkerProps) => {
  const imgPath = getMarkerImagePath(location, markerTypes);
  return <img src={imgPath} className={s.mapMarker} alt="" />;
};

export default MapMarker;

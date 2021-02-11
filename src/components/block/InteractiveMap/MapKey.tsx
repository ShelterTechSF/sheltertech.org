import * as React from "react";
import type { MarkerType } from "./InteractiveMap";

import s from "./MapKey.module.css";

// ----------------------------- //
//          Sub-Components
// ----------------------------- //

type MapKeyEntryProps = {
  marker: MarkerType;
};

const MapKeyEntry = ({ marker }: MapKeyEntryProps) => (
  <div className={s.mapKeyEntry}>
    <img src={marker.imgPath} alt={`${marker.name} Map Marker`} />
    <span className={s.mapKeyText}>{marker.name}</span>
  </div>
);

type MapKeyProps = {
  markerTypes: MarkerType[];
};

// ----------------------------- //
//          Main Component
// ----------------------------- //

const MapKey = ({ markerTypes }: MapKeyProps) => (
  <div className={s.mapKey}>
    {markerTypes.map((marker: MarkerType) => (
      <MapKeyEntry key={marker.name} marker={marker} />
    ))}
  </div>
);

export default MapKey;

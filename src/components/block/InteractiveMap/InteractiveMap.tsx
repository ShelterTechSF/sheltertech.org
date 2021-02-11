import GoogleMapReact from "google-map-react";
import * as React from "react";

import s from "./InteractiveMap.module.css";

import MapKey from "./MapKey";

// ----------------------------- //
//          Data
// ---------------------------- //
// This data could potentially come from a CMS as JSON, but since string
// matching is important with marker types, we will need careful error-handling

export type MarkerType = {
  name: string;
  imgPath: string;
};


// ----------------------------- //
//          Sub-Components
// ---------------------------- //

type TitleBlockProps = {
  title: string;
  subtitle?: string;
};

const TitleBlock = ({ title, subtitle }: TitleBlockProps) => (
  <div className={s.mapTitleWrapper}>
    <div className={s.mapTitle}>{title}</div>
    {subtitle && <div className={s.mapSubTitle}>{subtitle}</div>}
  </div>
);

// ----------------------------- //
//          Main Component
// ---------------------------- //

type InteractiveMapProps = {
  zoom: number;
  center: {
    lat: number;
    lng: number;
  };
  title?: string;
  subtitle?: string;
  latLngBounds: {
    north: number;
    south: number;
    west: number;
    east: number;
  };
  markerTypes: MarkerType[];
};

const InteractiveMap = ({
  center,
  zoom,
  title,
  subtitle,
  latLngBounds,
  markerTypes,
}: InteractiveMapProps) => {
  // Callback used by google-map-react library to allow access to additional configuration options.
  // https://github.com/google-map-react/google-map-react/blob/master/API.md#options-funcobject
  const createMapOptions = () => {
    return {
      zoomControl: false,
      fullscreenControl: false,
      restriction: {
        latLngBounds,
        strictBounds: false,
      },
    };
  };

  return (
    <div className={s.mapWrapper}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY || "" }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={createMapOptions}
      />
      {title && <TitleBlock title={title} subtitle={subtitle} />}
      <MapKey markerTypes={markerTypes} />
    </div>
  );
};

export default InteractiveMap;

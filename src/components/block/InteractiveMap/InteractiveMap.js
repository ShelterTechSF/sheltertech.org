import GoogleMapReact from "google-map-react";
import PropTypes, { string } from "prop-types";
import React from "react";

import s from "./InteractiveMap.module.css";

// ----------------------------- //
//          Sub-Components
// ---------------------------- //

const TitleBlock = ({ title, subtitle }) => (
  <div className={s.mapTitleWrapper}>
    <div className={s.mapTitle}>{title}</div>
    {subtitle && <div className={s.mapSubTitle}>{subtitle}</div>}
  </div>
);

TitleBlock.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

TitleBlock.defaultProps = {
  subtitle: null,
};

// ----------------------------- //
//          Main Component
// ---------------------------- //

const InteractiveMap = ({ center, zoom, title, subtitle }) => {
  // Callback used by google-map-react library to allow access to additional configuration options.
  // https://github.com/google-map-react/google-map-react/blob/master/API.md#options-funcobject
  const createMapOptions = () => {
    return {
      zoomControl: false,
      fullscreenControl: false,
      restriction: {
        latLngBounds: {
          north: 37.82,
          south: 37.7,
          west: -122.53,
          east: -122.37,
        },
        strictBounds: false,
      },
    };
  };

  return (
    <>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={createMapOptions}
      />
      {title && <TitleBlock title={title} subtitle={subtitle} />}
    </>
  );
};

InteractiveMap.propTypes = {
  zoom: PropTypes.number.isRequired,
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
  title: string,
  subtitle: string,
};

InteractiveMap.defaultProps = {
  title: null,
  subtitle: null,
};

export default InteractiveMap;

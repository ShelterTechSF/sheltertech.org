import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";
import React from "react";

// Callback used by google-map-react library to allow access to additional configuration options.
// https://github.com/google-map-react/google-map-react/blob/master/API.md#options-funcobject
const createMapOptions = () => {
  return {
    zoomControl: false,
    fullscreenControl: false,
    restriction: {
      latLngBounds: {
        north: 37.82,
        south: 37.70,
        west: -122.53,
        east: -122.37,
      },
      strictBounds: false,
    },
  };
};

const InteractiveMap = ({ center, zoom }) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY }}
      defaultCenter={center}
      defaultZoom={zoom}
      options={createMapOptions}
    />
  );
};

InteractiveMap.propTypes = {
  zoom: PropTypes.number.isRequired,
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
};

export default InteractiveMap;

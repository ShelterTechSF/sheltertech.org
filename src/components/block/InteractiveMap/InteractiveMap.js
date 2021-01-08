import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";
import React from "react";

const InteractiveMap = ({ center, zoom }) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY }}
      defaultCenter={center}
      defaultZoom={zoom}
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

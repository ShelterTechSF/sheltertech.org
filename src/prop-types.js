import PropTypes from "prop-types";

export const ImagePropType = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export const TitleDescriptionPropType = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

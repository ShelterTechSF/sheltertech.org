import PropTypes from "prop-types";
import React from "react";

const TeamListItem = ({ img, email, name, title }) => (
  <li className={`team-list--item ${img}`}>
    <div className="team-list--item--details">
      <p className="team-list--item--name">
        <a href={`mailto:${email}@sheltertech.org`}>{name}</a>
      </p>
      {title ? <p className="team-list--item--title">{title}</p> : null}
    </div>
  </li>
);

TeamListItem.propTypes = {
  img: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
};

TeamListItem.defaultProps = {
  img: "placeholder",
  email: "info",
  title: null,
};

export default TeamListItem;

import PropTypes from "prop-types";
import React from "react";
import "./EventsList.scss";

import UPCOMING_EVENTS from "./data/EventsList";

const EVENTS_LIST = UPCOMING_EVENTS.filter((n) => n && n.show);

const EventsItem = ({ event: n }) => (
  <li className="event-card">
    <a href={n.link} target="_blank" rel="noreferrer">
      <p className="event-card--cost">{n.cost}</p>
      <img className="event-card--image" src={n.img} alt={n.description} />
      <div className="event-card--details">
        <div>
          <p className="event-card--details--date">{n.date}</p>
          <h4>{n.title}</h4>
          <p className="event-card--details--description">{n.description}</p>
        </div>
        <small>{n.location}</small>
      </div>
    </a>
  </li>
);

EventsItem.propTypes = {
  event: PropTypes.shape({
    cost: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

const EventsList = () => (
  <ul className="events-list">
    {EVENTS_LIST.filter((n) => n && n.show)
      .reverse()
      .map((n) => (
        <EventsItem key={n.id} event={n} />
      ))}
  </ul>
);

export default EventsList;

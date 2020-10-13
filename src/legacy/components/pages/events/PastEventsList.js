import PropTypes from "prop-types";
import React from "react";
import "./EventsList.scss";

import PAST_EVENTS from "./data/PastEventsList";

const EVENTS_LIST = PAST_EVENTS.filter((n) => n && n.show);

const EventsItem = ({ event: n }) => (
  <a className="event-card-link" href={n.link} target="_blank" rel="noreferrer">
    <div className="event-card">
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
    </div>
  </a>
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

const PastEventsList = () => (
  <ul className="events-list">
    {EVENTS_LIST.filter((n) => n && n.show).map((n) => (
      <li className="events-list-item">
        <EventsItem key={n.id} event={n} />
      </li>
    ))}
  </ul>
);

export default PastEventsList;

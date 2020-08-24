import React from "react";

import "./EventsView.scss";

import EventsList from "./EventsList";
import PastEventsList from "./PastEventsList";

const EventsView = () => (
  <div className="events">
    <div className="content">
      <div className="content-bg" />
      <div className="content--header">
        <h2>Events</h2>
        <h3>
          Whether you&apos;re looking to volunteer, learn about homelessness, or
          just meet people from different walks of life—our events are all about
          bringing people together.
        </h3>
      </div>

      <EventsList />
      <h3 className="events--past">Past Events</h3>
      <PastEventsList />
    </div>
  </div>
);

export default EventsView;

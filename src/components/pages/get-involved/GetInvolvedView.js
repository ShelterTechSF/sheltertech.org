import React from "react";

import "./GetInvolvedView.scss";

import EventsList from "../events/EventsList";
import { PositionsList } from "./PositionsList";

const GetInvolvedView = () => (
  <div className="volunteer">
    <div className="content">
      <div className="content-bg" />
      <div className="content--header">
        <h2>Volunteer Events</h2>
        <h3>
          Create lasting impact in just a few hours at a Homeless Services
          Workshop where you&apos;ll work side-by-side with people who&apos;ve
          experienced homelessness to verify information on our website and make
          sure the 1500+ services in our system are accurate and easy to
          understand.{" "}
        </h3>
      </div>

      <EventsList />
      <div className="content--header">
        <h2>Join the Team</h2>
        <h3>
          Apply your skills to solving homelessness!
          <br />
          With a commitment of a few hours a week, you can join Sheltertech, an
          all-volunteer organisation building tech products for the homeless and
          underserved communities of San Francisco.
        </h3>
      </div>
      <PositionsList />

      <div className="content--header">
        <h2>Paid Opportunities</h2>
        <h3>
          Are you experiencing homelessness and looking for part-time job
          opportunities in San Francisco? We{" "}
          <strong>hire members of the homeless community</strong> to help us
          improve our products. To learn more, fill out the form below.
        </h3>
      </div>
      <span className="iframe-wrapper">
        <iframe
          title="application"
          src="https://docs.google.com/forms/d/1dg7tj3DYUxmvtwpwRTK0gX20S6LfWH5rhU8nqMawYTA/viewform"
        />
      </span>
    </div>
  </div>
);

export default GetInvolvedView;

import React from "react";
import "./PositionsList.scss";

export const PositionsList = () => (
  <div className="positions">
    <h3>Open Roles</h3>

    <ul className="positions-list">
      <li className="positions-list--legend">
        <p>Positions</p>
        <p>Description</p>
      </li>
      <li className="positions-list--item">
        <a
          className="positions-list--item--title"
          href="mailto:jasmine@sheltertech.org?subject=Product Management Volunteer"
        >
          Product Management
        </a>
        <a
          href="mailto:jasmine@sheltertech.org?subject=Product Management Volunteer"
          className="positions-list--item--desc"
        >
          Lead cross-functional teams of researchers, designers, and developers
          to improve our products and make lasting impact for our users
        </a>
      </li>
      <li className="positions-list--item">
        <a
          className="positions-list--item--title"
          href="mailto:jasmine@sheltertech.org?subject=Growth Volunteer"
        >
          Growth & Marketing
        </a>
        <a
          href="mailto:jasmine@sheltertech.org?subject=Growth Volunteer"
          className="positions-list--item--desc"
        >
          Build and execute our GTM strategy for SF Service Guide amongst
          service providers and low and no-income San Franciscans
        </a>
      </li>
      <li className="positions-list--item">
        <a
          className="positions-list--item--title"
          href="mailto:jasmine@sheltertech.org?subject=Development Volunteer"
        >
          Development
        </a>
        <a
          href="mailto:jasmine@sheltertech.org?subject=Development Volunteer"
          className="positions-list--item--desc"
        >
          Full stack, Front End, and Dev Ops opportunities (React or Ruby on
          Rails preferred)
        </a>
      </li>
      <li className="positions-list--item">
        <a
          className="positions-list--item--title"
          href="mailto:jasmine@sheltertech.org?subject=Design Volunteer"
        >
          Product Design
        </a>
        <a
          href="mailto:jasmine@sheltertech.org?subject=Design Volunteer"
          className="positions-list--item--desc"
        >
          Work with research, product, and dev teams to create products with
          real impact
        </a>
      </li>
      <li className="positions-list--item">
        <a
          className="positions-list--item--title"
          href="mailto:jasmine@sheltertech.org?subject=SEO Analyst Volunteer"
        >
          SEO Analyst
        </a>
        <a
          href="mailto:jasmine@sheltertech.org?subject=SEO Analyst Volunteer"
          className="positions-list--item--desc"
        >
          Help define and report on organizational metrics as well as assist
          with city-wide research
        </a>
      </li>
      <li className="positions-list--item">
        <a
          className="positions-list--item--title"
          href="mailto:jasmine@sheltertech.org?subject=Events Volunteer"
        >
          Events
        </a>
        <a
          href="mailto:jasmine@sheltertech.org?subject=Events Volunteer"
          className="positions-list--item--desc"
        >
          Run a variety of events aimed at bringing together the tech and
          homeless communities
        </a>
      </li>
      <li className="positions-list--item">
        <a
          className="positions-list--item--title"
          href="mailto:jasmine@sheltertech.org?subject=Volunteer Coordinator"
        >
          Volunteer Coordinator
        </a>
        <a
          href="mailto:jasmine@sheltertech.org?subject=Volunteer Coordinator"
          className="positions-list--item--desc"
        >
          Recruit more people to the cause and help manage our growing team
        </a>
      </li>
    </ul>
  </div>
);

export default PositionsList;

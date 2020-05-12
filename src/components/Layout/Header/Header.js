import React from 'react';
import { Link } from 'gatsby';
import SlideMenu from '../SlideMenu';
import '../../../stylesheets/components/Header.scss';

const Header = () => (
  <header className="site--header">
    <div className="site--header--wrapper">
      <h1 className="site--header--logo"><Link to="/">ShelterTech</Link></h1>
      <nav className="site--header--nav">
        <SlideMenu />
        <ul>
          <li><Link to="/">Programs</Link></li>
          <li><Link to="/annual-report">Impact</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/get-involved">Get Involved</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><a href="mailto:info@sheltertech.org">Contact Us</a></li>
          <li><a href="https://medium.com/shelter-tech" target="_blank" rel="noopener noreferrer">Blog</a></li>
          <li><Link className="donate-button" to="/donate">Donate</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;

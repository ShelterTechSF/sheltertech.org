import React from 'react';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';
import '../../../stylesheets/components/SlideMenu.scss';

class SlideMenu extends React.PureComponent {
  render() {
    return (
      <Menu right>
        <Link to="/">Programs</Link>
        <li><Link to="/annual-report-2018">Impact</Link></li>
        <Link to="/events">Events</Link>
        <Link to="/get-involved">Get Involved</Link>
        <Link to="/team">Team</Link>
        <a href="mailto:info@sheltertech.org">Contact Us</a>
        <a href="https://medium.com/shelter-tech" target="_blank" rel="noopener noreferrer">Blog</a>
        <Link className="donate-button" href="/donate">Donate</Link>
      </Menu>
    );
  }
}

export default SlideMenu;

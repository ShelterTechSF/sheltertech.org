import React from 'react'
import { Link } from 'gatsby'
import '../../../stylesheets/components/layouts/Footer.scss'

const Footer = () => (
  <footer className="site--footer">
    <nav className='site--footer--nav'>
      <ul>
        <li><Link to='/'>Programs</Link></li>
        <li><Link to='/annual-report-2018'>Impact</Link></li>
        <li><Link to='/events'>Events</Link></li>
        <li><Link to='/get-involved'>Get Involved</Link></li>
        <li><Link to='/team'>Team</Link></li>
        <li><a href='mailto:info@sheltertech.org'>Contact Us</a></li>
        <li><Link className='donate-button' to='/donate'>Donate</Link></li>
      </ul>
    </nav>
    <div className='site--footer--legal'>
      <ul>
        <li>ShelterTech is a 501 (c)(3)</li>
        <li>ein: 38-3984099</li>
        <li>made in san francisco</li>
        <li>© 2018 All Rights Reserved</li>
        <li><a href='https://www.facebook.com/ShelterTechOrg/'>facebook</a></li>
      </ul>
    </div>
  </footer>
)

export default Footer
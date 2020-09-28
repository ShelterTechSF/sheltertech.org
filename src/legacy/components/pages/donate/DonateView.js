import React from "react";

import ImageDonate from "./assets/donate-btn.png";

// TODO This was built 15 minutes before handing out posters advertising it, will need a touch up
import "./DonateView.scss";

const DonateView = () => (
  <div className="team donate">
    <div className="content">
      <div className="content-bg" />
      <div className="content--header">
        <h2>Donate Today</h2>
        <h3>
          Your donations help us solve the biggest technology challenges faced
          by those experiencing homelessness.
        </h3>
      </div>

      <ul className="donate--cards">
        <li className="donate--card">
          <p className="donate--card--amount">$25</p>
          <h6>Supporter</h6>
          <p>
            2 weeks of free wifi in an emergency shelter serving up to 300
            people
          </p>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
            id="donate-form"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="K29R6HRSEDRF6"
            />
            <input
              className="donate-form-button"
              type="image"
              src={ImageDonate}
              border="0"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </li>
        <li className="donate--card">
          <p className="donate--card--amount">$100</p>
          <h6>Donor</h6>
          <p>
            6 hours of valuable work experience for someone experiencing
            homelessness
          </p>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
            id="donate-form"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="K29R6HRSEDRF6"
            />
            <input
              className="donate-form-button"
              type="image"
              src={ImageDonate}
              border="0"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </li>
        <li className="donate--card">
          <p className="donate--card--amount">$500</p>
          <h6>Champion</h6>
          <p>New wifi access points able to serve 100 people in a shelter</p>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
            id="donate-form"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="K29R6HRSEDRF6"
            />
            <input
              className="donate-form-button"
              type="image"
              src={ImageDonate}
              border="0"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </li>
        <li className="donate--card">
          <p className="donate--card--amount">$5000</p>
          <h6>Advocate</h6>
          <p>
            Gift a new shelter with wifi access—
            <br />
            an impact that will last for years
          </p>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
            id="donate-form"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="K29R6HRSEDRF6"
            />
            <input
              className="donate-form-button"
              type="image"
              src={ImageDonate}
              border="0"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </li>
        <li className="donate--card donate--card--custom">
          <p className="donate--card--amount">Donate a Custom Amount</p>
          <h6>Every little bit helps.</h6>
          <p>
            ShelterTech is an all-volunteer non-profit so your donations go
            towards services and employment opportunities for those experiencing
            homelessness.
          </p>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
            id="donate-form"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="K29R6HRSEDRF6"
            />
            <input
              className="donate-form-button"
              type="image"
              src={ImageDonate}
              border="0"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </li>
      </ul>

      <div className="content--header">
        <h2>Donate by Mail</h2>
        <h3 className="donate--address">
          Our mailing address:
          <br />
          ShelterTech
          <br />
          268 Bush Street #4302
          <br />
          San Francisco, CA 94104
        </h3>
      </div>

      <p className="donate--legal">
        ShelterTech (Tax ID #38-3984099) is an all-volunteer non-profit
        organization under section 501(c)3 of the Internal Revenue Code.
        Contributions to ShelterTech are tax deductible.
      </p>
    </div>
  </div>
);

export default DonateView;

import React from "react";
import "./GivingTuesdayView.scss";
import GivingTuesdayLogo from "./assets/givingtuesday-logo.png";
import PhotoGroup01 from "./assets/photos1.png";
import PhotoGroup02 from "./assets/photos2.png";
import StatsGroup from "./assets/stats.png";

const GivingTuesdayView = () => (
  <div className="team GivingTuesday">
    <div className="content">
      <div className="content-bg" />
      <div className="wrapper">
        <div className="content-left">
          <img
            src={GivingTuesdayLogo}
            className="GivingTuesday--photo"
            alt="Giving Tuesday"
          />
          <h2>
            This Giving Tuesday we invite you to support our “Wiring an SF
            Shelter” campaign
          </h2>
          <p>
            This Giving Tuesday we are reaching out to the ShelterTech community
            to ask you to help us raise $9,000 to complete our biggest WiFi
            project so far, and in turn better the lives of hundreds of
            low-income residents.
          </p>
          <p>
            At ShelterTech, we are dedicated to solving the biggest technology
            challenges faced by those experiencing homelessness. We believe that
            technology enriches the lives of millions of Bay Area residents, but
            largely ignores the most vulnerable people in our cities — creating
            a digital divide that grows wider every day.
          </p>
          <img
            src={PhotoGroup01}
            className="GivingTuesday--photo"
            alt="ShelterTech Team"
          />
          <h2>Bridging the Divide with WiFi</h2>
          <p>
            Access to the internet has become essential to our daily lives, but
            for the least fortunate it remains unaffordable. This Giving
            Tuesday, we hope to extend the impact of our ShelterConnect Program
            beyond our current 1,000 nightly residents within 15 shelters in SF
            by wiring one of the largest shelters in SF. Chartered to house
            formerly homeless adults, many of the individuals who reside here
            are without the means to connect with the outside world. When
            sheltered and connected to loved ones, healthcare, and job
            providers, at-risk individuals can regain autonomy and dignity and
            lead a more healthy, happy, and productive life.
          </p>
          <p>
            We ask for your support this holiday season to make this project a
            reality. Currently, ShelterConnect has raised 70% of the $30,000 in
            funding required to bring this WiFi project to fruition. With your
            support, we will raise the remaining $9,000 funds this Giving
            Tuesday — paving the way for a wired shelter by mid-2020.
          </p>
          <img
            src={StatsGroup}
            className="GivingTuesday--photo"
            alt="SF Point in Time Survey Stats"
          />
          <h2>The ShelterTech Story</h2>
          <p>
            Our organization was founded in 2016 by Darcel Jackson after he was
            injured at work and shortly thereafter found himself homeless. In
            his experience, there was no central source of truth for navigating
            homelessness and eviction, and even if there was, people
            experiencing these states of precarity lacked the means to access
            this information. To address this deficit in information,
            ShelterTech built a searchable, enterprise-class directory of social
            services in SF that’s both free and open to the public — The SF
            Service Guide. To increase accessibility, we are installing WiFi in
            shelters through our ShelterConnect program.
          </p>
          <img
            src={PhotoGroup02}
            className="GivingTuesday--photo"
            alt="ShelterTech Team"
          />
          <h2>Our Impact to Date</h2>
          <ul>
            <li>
              3,000+ people in San Francisco have access to free WiFi through
              ShelterConnect, annually
            </li>
            <li>
              1,000+ people now have access to WiFi via ShelterConnect, nightly
            </li>
            <li>
              1,300+ paid hours of work generated for community representatives
            </li>
            <li>
              4,000+ volunteer hours were spent on the development of SF Service
              Guide
            </li>
          </ul>
          <p>
            Your support this Giving Tuesday help us continue creating an impact
            in the lives of those experiencing homelessness in San Francisco —
            please consider donating to our campaign.{" "}
          </p>

          <p className="GivingTuesday--legal">
            ShelterTech (Tax ID #38-3984099) is an all-volunteer non-profit
            organization under section 501(c)3 of the Internal Revenue Code.
            Contributions to ShelterTech are tax deductible.
          </p>
        </div>

        <div className="content-right">
          <iframe
            src="https://secure.givelively.org/donate/shelter-tech?ref=sd_widget&amp;widget_url=https%3A%2F%2Fmembers.givelively.org%2Fbranded-donation-widget&amp;referrer_url=https%3A%2F%2Fmembers.givelively.org%2Fimages&amp;show_donate_now_button=false"
            id="give-lively-widget-inner"
            title="Donate to ShelterTech"
            scrolling="no"
            seamless="no"
            frameBorder="0"
            async=""
            defer=""
            width="100%"
            allowpaymentrequest=""
            className="giveLivelyEmbed"
          />
        </div>
      </div>
    </div>
  </div>
);

export default GivingTuesdayView;

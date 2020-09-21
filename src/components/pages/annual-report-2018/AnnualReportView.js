import React from "react";

import "./AnnualReportView.scss";
import ShelterTechAnnualReport2018 from "./assets/ShelterTech-Annual-Report-2018.pdf";
import ImgAskDarcelLogo from "./assets/askdarcel-logo.png";
import ImgCaseyGraph from "./assets/casey-graph.png";
import ImgCaseyLogo from "./assets/casey-logo.png";
import ImgShelterConnectLogo from "./assets/shelterconnect-logo.png";

const AnnualReportView = () => (
  <div className="annual-report">
    <div className="content">
      <div className="content-bg" />
      <div className="annual-report--overview">
        <div className="wrapper">
          <p className="annual-report--year">2018</p>
          <p className="annual-report--hero">ShelterTech Annual Report</p>
          <p className="annual-report--text">
            ShelterTech is an award winning non-profit solving the biggest
            technology challenges faced by people experiencing homelessness.
          </p>
          <p className="annual-report--text">
            Founded in 2016, ShelterTech is now a 100 member strong
            volunteer-only organisation with over $100,000 in annual funding,
            $800,000 in in-kind contributions, and 3 program offerings.
          </p>
          <p className="annual-report--text">
            In 2018, we faced a serious challenge as founders and key leaders
            moved out of state. Could we build a resilient organisation, able to
            deliver world-class technology products for homeless communities,
            all while completely volunteer led and operated? The short answer
            is: Yes! We tripled in size, outpaced all our goals, and expanded
            all our programs. We can’t wait for an exciting 2019.
          </p>
          <div className="annual-report--growth">
            <h2>
              ShelterTech <span className="blue">tripled</span>
              <br />
              in size in 2018
            </h2>
          </div>
          <div className="annual-report--goals">
            <h2>ShelterTech exceeded goals across every program</h2>
            <ul>
              <li>
                <span className="goal-number">7</span>
                <p>ShelterConnect Wifi Installations</p>
              </li>
              <li>
                <span className="goal-number">7</span>
                <p>SF Service Guide Releases</p>
              </li>
              <li>
                <span className="goal-number">26</span>
                <p>Datathons Hosted</p>
              </li>
              <li>
                <span className="goal-number">228</span>
                <p>Organizations Vetted</p>
              </li>
              <li>
                <span className="goal-number">6</span>
                <p>Educational & Social Events</p>
              </li>
              <li>
                <span className="goal-number">50+</span>
                <p>Casey Research Interviews</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="annual-report--shelterconnect">
        <div className="wrapper">
          <img src={ImgShelterConnectLogo} alt="ShelterConnect" />
          <p className="annual-report--text">
            People experiencing homelessness rely on the internet to apply for
            housing and benefits, schedule appointments with doctors and case
            managers, search for jobs, and stay in touch with family and
            friends. It&apos;s a lifeline for getting back on your feet.
          </p>
          <p className="annual-report--text">
            ShelterConnect works with internet service providers to offer free
            wifi in shelters and transitional housing facilties and offers
            portable chargers to address battery charging issues.
          </p>
          <div className="annual-report--shelterconnect-stats">
            <h2>In 2018, ShelterConnect expanded wifi installations by 228%</h2>
            <ul>
              <li>
                <span className="goal-number">3000</span>
                <p>
                  people now have access to wifi via ShelterConnect, annually
                </p>
              </li>
              <li>
                <span className="goal-number">600</span>
                <p>people no have access to wifi via ShelterConnect, nightly</p>
              </li>
              <li>
                <span className="goal-number">200</span>
                <p>portable phone chargers distributed</p>
              </li>
              <li>
                <span className="goal-number">7</span>
                <p>
                  new wifi installations, including 3 new emergency shelters
                </p>
              </li>
              <li>
                <span className="goal-number">$50</span>
                <p>cost for wifi in a shelter for an entire month</p>
              </li>
              <li>
                <span className="goal-number">$0.02</span>
                <p>cost for wifi for someone in a shelter per night</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="annual-report--askdarcel">
        <div className="wrapper">
          <img src={ImgAskDarcelLogo} alt="SF Service Guide" />
          <p className="annual-report--text">
            SF Service Guide is a robust and continously updated online
            directory for case managers, city employees, social workers, and
            people in the homeless, low/no income, at risk, and supportive
            communities to find housing and human services in San Francisco.
          </p>
          <p className="annual-report--text">
            In 2018, we released an Alpha of the product but decided to hold off
            on a public launch while we validated the content on the site—trust
            is the biggest concern for people experiencing homelessness when it
            comes to referrals for services. The good news is we’ve now
            validated everything on the site and are ready for our Beta launch.
          </p>
          <h3>
            In 2018, over <span className="white">2,000</span> hours were spent
            on the development of SF Service Guide.
          </h3>
          <h3>
            The tech team shipped <span className="white">7 releases</span>{" "}
            adding critical functionality.
          </h3>
          <h3>
            Directory listings grew from 365 to over 800, a{" "}
            <span className="white">219%</span> increase.
          </h3>
          <h3>
            Over <span className="white">200 listings</span> were certified by
            our data partner, the Homeless Advocacy Project.
          </h3>
          <div className="annual-report--askdarcel-stats">
            <h2>
              Trust is key to our success—
              <br />
              <span className="white">100% of our data is now certified.</span>
            </h2>
            <p className="annual-report--text">
              ShelterTech takes a unique and ground-breaking approach to
              ensuring data quality by organizing public events called Datathons
              where volunteers work side-by-side with individuals who are
              currently or previously homeless to verify and vet the services in
              our system.
            </p>
            <ul>
              <li>
                <span className="goal-number">100%</span>
                <p>services certified</p>
              </li>
              <li>
                <span className="goal-number">209</span>
                <p>volunteers attended</p>
              </li>
              <li>
                <span className="goal-number">1,299</span>
                <p>services added</p>
              </li>
              <li>
                <span className="goal-number">64.3</span>
                <p>total hours</p>
              </li>
              <li>
                <span className="goal-number">1,088</span>
                <p>organizations vetted</p>
              </li>
              <li>
                <span className="goal-number">27</span>
                <p>datathon events</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="annual-report--casey">
        <div className="wrapper">
          <img src={ImgCaseyLogo} alt="Casey" />
          <p className="annual-report--text">
            Casey&apos;s goal is to create step-by-step guides for the most
            issues faced by people experiencing homelessness.
          </p>
          <p className="annual-report--text">
            In order to understand the needs of individuals experiencing
            transitional homelessness, the Casey team conducted service design
            research (also known as human-centered design or participatory
            design) through a combination of interviews, observations, and
            activities.{" "}
          </p>
          <p className="annual-report--text">
            Casey guides are currently in development and will be release Q2
            2019.
          </p>
          <div className="annual-report--casey-stats">
            <h3>
              In 2018, the Casey team interviewed{" "}
              <span className="white">50 people</span> to learn about their most
              urgent needs.
            </h3>
            <h4>Participant Information</h4>
            <ul>
              <li>
                <span className="goal-number">35.6</span>
                <p>average age</p>
              </li>
              <li>
                <span className="goal-number">13</span>
                <p>median years living in SF</p>
              </li>
              <li>
                <span className="goal-number">60%</span>
                <p>currently homeless</p>
              </li>
              <li>
                <span className="goal-number">60%</span>
                <p>no mental health history</p>
              </li>
              <li>
                <span className="goal-number">40%</span>
                <p>currently working</p>
              </li>
              <li>
                <span className="goal-number">20%</span>
                <p>retired or unable to work</p>
              </li>
              <li>
                <span className="goal-number">30%</span>
                <p>in school</p>
              </li>
              <li>
                <span className="goal-number">40%</span>
                <p>recently homeless</p>
              </li>
              <li>
                <span className="goal-number">50%</span>
                <p>daily user of productivity apps</p>
              </li>
              <li>
                <span className="goal-number">70%</span>
                <p>daily user of social media</p>
              </li>
              <li>
                <span className="goal-number">50%</span>
                <p>have an unlimited data plan</p>
              </li>
              <li>
                <span className="goal-number">30%</span>
                <p>have laptop or desktop</p>
              </li>
            </ul>
            <h4 className="mobile-hide">Reasons for Homelessness</h4>
            <img
              src={ImgCaseyGraph}
              alt="Reasons for Homelessness"
              className="casey-graph mobile-hide"
            />
          </div>
        </div>
      </div>

      <div className="annual-report--2019">
        <div className="wrapper">
          <h1>2019 is going to be a big year</h1>
          <p className="annual-report--text">
            This past year was a stunning success and gave us the momentum we
            needed to keep growing and surpassing our goals. Here’s what we want
            to accomplish in 2019.
          </p>
          <ul className="annual-report--2019-goals">
            <li>
              <p>Public launch of SF Service Guide</p>
            </li>
            <li>
              <p>2000 SF Service Guide users by year end</p>
            </li>
            <li>
              <p>Host 45 Datathons</p>
            </li>
            <li>
              <p>Install wifi in 8 shelters & SROs</p>
            </li>
            <li>
              <p>Provide free wifi to 500 more people</p>
            </li>
            <li>
              <p>500 hours of paid work for the homelesss</p>
            </li>
            <li>
              <p>Host 4 events to bring communities together</p>
            </li>
            <li>
              <p>Launch our first Casey product</p>
            </li>
          </ul>
          <p className="annual-report--text">
            Want even more details? Read the full annual report{" "}
            <a href={ShelterTechAnnualReport2018} download>
              here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AnnualReportView;

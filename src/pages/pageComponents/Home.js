import React from 'react';
import './Home.scss';

import ImageShelterConnectRound from '../../images/shelterconnect-round.png';
import ImageAskDarcelRound from '../../images/askdarcel-round.png';
import ImageCaseyRound from '../../images/casey-round.png';
import ImageShelterconnectFeature from '../../images/shelterconnect-feature.png';
import ImageShelterconnectLogo from '../../images/shelterconnect-logo.png';
import ImageKQED from '../../images/kqed-logo.png';
import ImageChronicle from '../../images/chronicle-logo.png';
import ImageAskDarcelFeature from '../../images/askdarcel-feature.png';
import ImageAskDarcelLogo from '../../images/askdarcel-logo.png';
import ImageCitylab from '../../images/citylab-logo.png';
import ImageCaseyFeature from '../../images/casey-feature.png';
import ImageCaseyLogo from '../../images/casey-logo.png';

const Home = () => (
  <div className="home">
    <div className="home--hero">
      <div className="home--hero--text">
        <h1>
          The homeless need
          <br />
          technology, too
        </h1>
        <h3>
          ShelterTech is solving the biggest technology challenges
          faced by those experiencing homelessness.
        </h3>
      </div>
    </div>

    <div className="content">
      <div className="content-bg" />

      <h2>Our Programs</h2>
      <ul className="home--cards">
        <li className="home--cards--card">
          <img src={ImageShelterConnectRound} alt="shelterconnect-logo" />
          <a href="/#shelterconnect"><h4>ShelterConnect</h4></a>
          <p>
            Free Wifi access in shelters
            <br />
            and transitional housing
          </p>
        </li>
        <li className="home--cards--card">
          <a href="https://askdarcel.org/" target="_blank" rel="noopener noreferrer"><img src={ImageAskDarcelRound} alt="askdarcel-logo" /></a>
          <h4><a href="https://askdarcel.org/" target="_blank" rel="noopener noreferrer">AskDarcel</a></h4>
          <p>Find housing and human services you&apos;re eligibile for</p>
        </li>
        <li className="home--cards--card">
          <img src={ImageCaseyRound} alt="casey-logo" />
          <a href="/#casey"><h4>Casey</h4></a>
          <p>Case management, powered by AI, accesible via voice and sms</p>
        </li>
      </ul>
    </div>

    <div className="home--founder">
      <div className="home--founder--text">
        <h5>A message from our founder</h5>
        <h2>Darcel Jackson</h2>
        <p>
          I became homeless when I was injured and
          lost my welding job working on the new Bay Bridge.
          I realized the longer I stayed in that condition, the harder it would become to escape it.
        </p>
        <p>
          Living on the streets,
          you spend most of your time trying to survive.
          It’s hard to know where to start,
          what services you need,
          how to get training  in a new field,
          or search for jobs.
        </p>
        <p>
          I had a smartphone and could find wifi,
          but there weren&apos;t any apps or websites to help me  get off the streets.
          Now I want to give back and help people that become homeless.
        </p>
      </div>
      <div className="home--founder--image" />
    </div>

    <div className="home--programs">
      <div className="home--programs--program">
        <div className="max-width">
          <div className="home--programs--program--image" id="shelterconnect">
            <img
              src={ImageShelterconnectFeature}
              className="shelterconnect-feature"
              alt="shelterconnect-feature"
            />
          </div>
          <div className="home--programs--program--text">
            <img
              src={ImageShelterconnectLogo}
              className="home--programs--program--text--logo"
              alt="shelterconnect-logo"
            />
            <h3>Wifi Where It&apos;s Needed Most</h3>
            <p>
              People experiencing homelessness rely on the internet
              to apply for housing and benefits,
              schedule appointments with doctors and case managers,
              search for jobs, and stay in touch with family and friends.
              It&apos;s a lifeline for getting back on your feet.
            </p>
            <p>
              ShelterConnect works with internet service providers to offer free wifi
              in shelters and transitional housing facilties.
            </p>
            <p>
              So far ShelterConnect has installed and provided free wifi in three shelters
              and seven transitional housing facilities in San Francisco,
              providing free wifi to over 3000 people in need.
            </p>
            <p>
              Learn more about
              <a href="http://sheltertech.org/shelterconnect-flyer.pdf" target="_blank" rel="noopener noreferrer">
                ShelterConnect.
              </a>
            </p>
            <div className="home--programs--program--text--further-reading">
              <h5>Read about it on</h5>
              <span className="">
                <a target="_blank" rel="noopener noreferrer" href="https://www.sfchronicle.com/business/article/Smartphones-are-a-lifeline-for-the-young-13582809.php">
                  <img
                    src={ImageChronicle}
                    className="home--programs--program--text--chronicle-image"
                    alt="sfchronicle-logo"
                  />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://ww2.kqed.org/news/2015/05/18/a-homeless-man-brings-wi-fi-to-san-francisco-shelters">
                  <img
                    src={ImageKQED}
                    className="home--programs--program--text--kqed-image"
                    alt="kqed-logo"
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="home--programs--program">
        <div className="max-width">
          <div className="home--programs--program--text">
            <img
              src={ImageAskDarcelLogo}
              className="home--programs--program--text--logo"
              alt="askdarcel-logo"
            />
            <h3>Find Human Services that are Right For You</h3>
            <p>
              In November 2017,
              ShelterTech began collaborating with the SF Bar Association&quot;s
              Homeless Advocacy Project
              to build the most robust housing and human services directory in San Francisco.
            </p>
            <p>
              Through the AskDarcel website, case managers, city employees,
              and people experiencing homelessness can find thousands of homelessness,
              housing, health, job, education, and other human services nearby
              and learn how to access them.
            </p>
            <p>
              Visit&nbsp;
              <a href="http://askdarcel.org">
                AskDarcel.org
              </a>
              &nbsp;for more info.
            </p>
            <a href="https://www.citylab.com/cityfixer/2015/10/how-apps-can-help-and-harm-the-homeless/412780/" className="home--programs--program--text--further-reading">
              <h5>Read about it on</h5>
              <img
                src={ImageCitylab}
                className="home--programs--program--text--citylab-image"
                alt="citylab-logo"
              />
            </a>
          </div>
          <div className="home--programs--program--image">
            <img
              src={ImageAskDarcelFeature}
              className="shelterconnect-feature"
              alt="shelterconnect-feature"
            />
          </div>
        </div>
      </div>

      <div className="home--programs--program">
        <div className="max-width">
          <div className="home--programs--program--image" id="casey">
            <img
              src={ImageCaseyFeature}
              className="casey-feature"
              alt="casey-feature"
            />
          </div>
          <div className="home--programs--program--text">
            <img
              src={ImageCaseyLogo}
              className="home--programs--program--text--logo casey-logo"
              alt="casey-feature"
            />
            <h3>Casey — Self Service Case Management</h3>
            <p>
              Utilizing data from AskDarcel and hundreds of research hours,
              Casey provides step by step guides for many of the most common problems
              faced by people at risk of or experiencing homelessness.
            </p>
            <p>
              Casey guides are delivered where they&apos;re needed most;
              paper guides will be available in shelters and resource centers early 2019.
            </p>
            <p>Digital guides will be coming in Q3 2019.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
